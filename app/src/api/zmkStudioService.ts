import { zmk } from '../proto/proto';
import { encodeKeycodeParameter, decodeKeycodeParameter } from './zmkStudioKeycodes';

const SERVICE_UUID = '00000000-0196-6107-c967-c5cfb1c2482a';
const RPC_CHRC_UUID = '00000001-0196-6107-c967-c5cfb1c2482a';

const FRAMING_SOF = 0xab;
const FRAMING_ESC = 0xac;
const FRAMING_EOF = 0xad;

export interface ZmkStudioConnection {
  type: 'usb' | 'ble';
  port?: any;
  device?: any;
  characteristic?: any;
  currentRequestId: number;
  pendingRequests: Map<number, (res: any) => void>;
  onNotification?: (notification: any) => void;
  behaviorIdToName: Record<number, string>;
  behaviorNameToId: Record<string, number>;
  deviceInfo?: any;
  cleanupBle?: () => void;
}

class FramingDecoder {
  private state = 0; // 0: IDLE, 1: AWAITING_DATA, 2: ESCAPED
  private data: number[] = [];
  private onFrame: (frame: Uint8Array) => void;

  constructor(onFrame: (frame: Uint8Array) => void) {
    this.onFrame = onFrame;
  }

  processByte(b: number) {
    switch (this.state) {
      case 0: // IDLE
        if (b === FRAMING_SOF) {
          this.state = 1;
        }
        break;
      case 1: // AWAITING_DATA
        if (b === FRAMING_SOF) {
          this.data = [];
        } else if (b === FRAMING_ESC) {
          this.state = 2;
        } else if (b === FRAMING_EOF) {
          this.onFrame(new Uint8Array(this.data));
          this.data = [];
          this.state = 0;
        } else {
          this.data.push(b);
        }
        break;
      case 2: // ESCAPED
        this.data.push(b);
        this.state = 1;
        break;
    }
  }
}

function encodeFrame(payload: Uint8Array): Uint8Array {
  const result: number[] = [FRAMING_SOF];
  for (let i = 0; i < payload.length; i++) {
    const b = payload[i];
    if (b === FRAMING_SOF || b === FRAMING_ESC || b === FRAMING_EOF) {
      result.push(FRAMING_ESC);
      result.push(b);
    } else {
      result.push(b);
    }
  }
  result.push(FRAMING_EOF);
  return new Uint8Array(result);
}

function handleIncomingResponse(conn: ZmkStudioConnection, response: any) {
  if (response.requestResponse) {
    const rr = response.requestResponse;
    const reqId = rr.requestId;
    const resolver = conn.pendingRequests.get(reqId);
    if (resolver) {
      conn.pendingRequests.delete(reqId);
      resolver(rr);
    }
  } else if (response.notification && conn.onNotification) {
    conn.onNotification(response.notification);
  }
}

export function decodeParameter(behaviorName: string, paramIndex: number, paramValue: number): string {
  if (behaviorName === '&kp') {
    return decodeKeycodeParameter(paramValue);
  }
  if (behaviorName === '&mo' || behaviorName === '&to' || behaviorName === '&tg') {
    return paramValue.toString();
  }
  if (behaviorName === '&mt') {
    if (paramIndex === 1) {
      const parts: string[] = [];
      if (paramValue & 0x01) parts.push('LCTRL');
      if (paramValue & 0x02) parts.push('LSHIFT');
      if (paramValue & 0x04) parts.push('LALT');
      if (paramValue & 0x08) parts.push('LGUI');
      if (paramValue & 0x10) parts.push('RCTRL');
      if (paramValue & 0x20) parts.push('RSHIFT');
      if (paramValue & 0x40) parts.push('RALT');
      if (paramValue & 0x80) parts.push('RGUI');
      return parts.join(' | ') || '0';
    } else {
      return decodeKeycodeParameter(paramValue);
    }
  }
  if (behaviorName === '&lt') {
    if (paramIndex === 1) {
      return paramValue.toString();
    } else {
      return decodeKeycodeParameter(paramValue);
    }
  }
  if (behaviorName === '&mkp') {
    const map = ['LCLK', 'RCLK', 'MCLK', 'MB4', 'MB5'];
    return map[paramValue] || paramValue.toString();
  }
  if (behaviorName === '&mmv') {
    const map = ['MOVE_UP', 'MOVE_DOWN', 'MOVE_LEFT', 'MOVE_RIGHT'];
    return map[paramValue] || paramValue.toString();
  }
  if (behaviorName === '&msc') {
    const map = ['SCRL_UP', 'SCRL_DOWN', 'SCRL_LEFT', 'SCRL_RIGHT'];
    return map[paramValue] || paramValue.toString();
  }
  return paramValue.toString();
}

export function encodeParameter(behaviorName: string, paramIndex: number, paramStr: string): number {
  if (behaviorName === '&kp') {
    return encodeKeycodeParameter(paramStr);
  }
  if (behaviorName === '&mo' || behaviorName === '&to' || behaviorName === '&tg') {
    return parseInt(paramStr, 10) || 0;
  }
  if (behaviorName === '&mt') {
    if (paramIndex === 1) {
      let val = 0;
      const parts = paramStr.split('|').map(s => s.trim().toUpperCase());
      for (const p of parts) {
        if (p === 'LCTRL' || p === 'LCTL') val |= 0x01;
        else if (p === 'LSHIFT' || p === 'LSFT') val |= 0x02;
        else if (p === 'LALT') val |= 0x04;
        else if (p === 'LGUI') val |= 0x08;
        else if (p === 'RCTRL' || p === 'RCTL') val |= 0x10;
        else if (p === 'RSHIFT' || p === 'RSFT') val |= 0x20;
        else if (p === 'RALT') val |= 0x40;
        else if (p === 'RGUI') val |= 0x80;
      }
      return val;
    } else {
      return encodeKeycodeParameter(paramStr);
    }
  }
  if (behaviorName === '&lt') {
    if (paramIndex === 1) {
      return parseInt(paramStr, 10) || 0;
    } else {
      return encodeKeycodeParameter(paramStr);
    }
  }
  if (behaviorName === '&mkp') {
    const map: Record<string, number> = {
      LCLK: 0,
      RCLK: 1,
      MCLK: 2,
      MB4: 3,
      MB5: 4
    };
    return map[paramStr.toUpperCase()] !== undefined ? map[paramStr.toUpperCase()] : parseInt(paramStr, 10) || 0;
  }
  if (behaviorName === '&mmv') {
    const map: Record<string, number> = {
      MOVE_UP: 0,
      MOVE_DOWN: 1,
      MOVE_LEFT: 2,
      MOVE_RIGHT: 3
    };
    return map[paramStr.toUpperCase()] !== undefined ? map[paramStr.toUpperCase()] : parseInt(paramStr, 10) || 0;
  }
  if (behaviorName === '&msc') {
    const map: Record<string, number> = {
      SCRL_UP: 0,
      SCRL_DOWN: 1,
      SCRL_LEFT: 2,
      SCRL_RIGHT: 3
    };
    return map[paramStr.toUpperCase()] !== undefined ? map[paramStr.toUpperCase()] : parseInt(paramStr, 10) || 0;
  }
  return parseInt(paramStr, 10) || 0;
}

export async function writeBytesSerial(conn: ZmkStudioConnection, bytes: Uint8Array) {
  const writer = conn.port.writable.getWriter();
  await writer.write(bytes);
  writer.releaseLock();
}

export async function writeBytesBle(conn: ZmkStudioConnection, bytes: Uint8Array) {
  await conn.characteristic.writeValueWithoutResponse(bytes);
}

export function callRpc(conn: ZmkStudioConnection, requestPayload: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const reqId = conn.currentRequestId++;
    const request = zmk.studio.Request.create({
      requestId: reqId,
      ...requestPayload
    });

    const encoded = zmk.studio.Request.encode(request).finish();
    const framed = encodeFrame(encoded);

    const timeout = setTimeout(() => {
      conn.pendingRequests.delete(reqId);
      reject(new Error('RPC request timed out'));
    }, 5000);

    conn.pendingRequests.set(reqId, (responseWrapper: any) => {
      clearTimeout(timeout);
      if (responseWrapper.meta?.simpleError !== undefined && responseWrapper.meta?.simpleError !== null) {
        reject(new Error(`ZMK Studio Meta Error: ${responseWrapper.meta.simpleError}`));
      } else {
        resolve(responseWrapper);
      }
    });

    const sendPromise = conn.type === 'usb'
      ? writeBytesSerial(conn, framed)
      : writeBytesBle(conn, framed);

    sendPromise.catch((e) => {
      clearTimeout(timeout);
      conn.pendingRequests.delete(reqId);
      reject(e);
    });
  });
}

async function startSerialReadLoop(conn: ZmkStudioConnection) {
  const reader = conn.port.readable.getReader();
  const decoder = new FramingDecoder((frameBytes) => {
    try {
      const response = zmk.studio.Response.decode(frameBytes);
      handleIncomingResponse(conn, response);
    } catch (e) {
      console.error('Failed to decode incoming RPC response', e);
    }
  });

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) {
        for (let i = 0; i < value.length; i++) {
          decoder.processByte(value[i]);
        }
      }
    }
  } catch (e) {
    console.error('Serial read loop disconnected/errored', e);
  } finally {
    try {
      reader.releaseLock();
    } catch (e) {}
  }
}

export async function connectSerial(): Promise<ZmkStudioConnection> {
  if (!('serial' in navigator)) {
    throw new Error('Web Serial is not supported in this browser.');
  }

  const port = await (navigator as any).serial.requestPort();
  await port.open({ baudRate: 115200 });

  const conn: ZmkStudioConnection = {
    type: 'usb',
    port,
    currentRequestId: 0,
    pendingRequests: new Map(),
    behaviorIdToName: {},
    behaviorNameToId: {}
  };

  // Start reader loop in background
  startSerialReadLoop(conn);

  return conn;
}

export async function connectBle(): Promise<ZmkStudioConnection> {
  if (!('bluetooth' in navigator)) {
    throw new Error('Web Bluetooth is not supported in this browser.');
  }

  const device = await (navigator as any).bluetooth.requestDevice({
    filters: [{ services: [SERVICE_UUID] }],
    optionalServices: [SERVICE_UUID]
  });

  const server = await device.gatt.connect();
  const service = await server.getPrimaryService(SERVICE_UUID);
  const characteristic = await service.getCharacteristic(RPC_CHRC_UUID);

  const conn: ZmkStudioConnection = {
    type: 'ble',
    device,
    characteristic,
    currentRequestId: 0,
    pendingRequests: new Map(),
    behaviorIdToName: {},
    behaviorNameToId: {}
  };

  const decoder = new FramingDecoder((frameBytes) => {
    try {
      const response = zmk.studio.Response.decode(frameBytes);
      handleIncomingResponse(conn, response);
    } catch (e) {
      console.error('Failed to decode incoming BLE response', e);
    }
  });

  const handleNotification = (event: any) => {
    const value = event.target.value;
    if (value) {
      const bytes = new Uint8Array(value.buffer);
      for (let i = 0; i < bytes.length; i++) {
        decoder.processByte(bytes[i]);
      }
    }
  };

  await characteristic.startNotifications();
  characteristic.addEventListener('characteristicvaluechanged', handleNotification);

  conn.cleanupBle = () => {
    try {
      characteristic.removeEventListener('characteristicvaluechanged', handleNotification);
    } catch (e) {}
  };

  return conn;
}

export async function disconnectDevice(conn: ZmkStudioConnection) {
  if (conn.type === 'usb' && conn.port) {
    try {
      await conn.port.readable?.cancel();
      await conn.port.writable?.close();
      await conn.port.close();
    } catch (e) {
      console.error('Error closing serial port', e);
    }
  } else if (conn.type === 'ble') {
    if (conn.cleanupBle) conn.cleanupBle();
    if (conn.device && conn.device.gatt?.connected) {
      try {
        conn.device.gatt.disconnect();
      } catch (e) {}
    }
  }
}

export async function checkLockState(conn: ZmkStudioConnection): Promise<boolean> {
  try {
    const res = await callRpc(conn, {
      core: { getLockState: true }
    });
    const lockState = res.core?.getLockState;
    return lockState === 0; // 0 = LOCKED, 1 = UNLOCKED
  } catch (e: any) {
    if (e.message?.includes('ZMK Studio Meta Error: 1') || e.message?.includes('Meta Error: 1')) {
      return true; // LOCKED
    }
    throw e;
  }
}

async function getBehaviorMapping(conn: ZmkStudioConnection): Promise<Record<number, string>> {
  const response = await callRpc(conn, {
    behaviors: { listAllBehaviors: true }
  });
  const behaviorIds = response.behaviors?.listAllBehaviors?.behaviors || [];

  const mapping: Record<number, string> = {};
  for (const id of behaviorIds) {
    try {
      const detailsResponse = await callRpc(conn, {
        behaviors: { getBehaviorDetails: { behaviorId: id } }
      });
      const details = detailsResponse.behaviors?.getBehaviorDetails;
      if (details && details.displayName) {
        mapping[id] = `&${details.displayName.toLowerCase()}`;
      }
    } catch (e) {
      console.error(`Failed to query behavior details for ${id}`, e);
    }
  }
  return mapping;
}

export async function getKeyboardKeymap(conn: ZmkStudioConnection): Promise<{
  keymap: any;
  layout: any[];
}> {
  conn.behaviorIdToName = await getBehaviorMapping(conn);
  conn.behaviorNameToId = {};
  Object.entries(conn.behaviorIdToName).forEach(([id, name]) => {
    conn.behaviorNameToId[name] = parseInt(id, 10);
  });

  try {
    const devInfoRes = await callRpc(conn, {
      core: { getDeviceInfo: true }
    });
    conn.deviceInfo = devInfoRes.core?.getDeviceInfo;
  } catch (e) {
    console.error('Failed to get device info', e);
  }

  let physicalLayouts: any[] = [];
  try {
    const layoutRes = await callRpc(conn, {
      keymap: { getPhysicalLayouts: true }
    });
    physicalLayouts = layoutRes.keymap?.getPhysicalLayouts?.layouts || [];
  } catch (e) {
    console.error('Failed to get physical layouts', e);
  }

  const res = await callRpc(conn, {
    keymap: { getKeymap: true }
  });
  const rawKeymap = res.keymap?.getKeymap;
  if (!rawKeymap) {
    throw new Error('Failed to get keymap from keyboard');
  }

  const layers: any[][] = [];
  const layer_names: string[] = [];

  rawKeymap.layers.forEach((layer: any, layerIndex: number) => {
    layer_names.push(layer.name || `Layer ${layerIndex}`);
    const layerBindings: any[] = [];

    layer.bindings.forEach((binding: any) => {
      const behaviorName = conn.behaviorIdToName[binding.behaviorId] || '&none';
      const params: any[] = [];
      if (binding.param1 !== undefined && binding.param1 !== 0) {
        params.push({
          value: decodeParameter(behaviorName, 1, binding.param1),
          params: []
        });
      }
      if (binding.param2 !== undefined && binding.param2 !== 0) {
        params.push({
          value: decodeParameter(behaviorName, 2, binding.param2),
          params: []
        });
      }

      layerBindings.push({
        value: behaviorName,
        params
      });
    });
    layers.push(layerBindings);
  });

  const keymap = {
    layers,
    layer_names
  };

  const layout = physicalLayouts.map((physLayout: any) => {
    return physLayout.keys.map((key: any) => {
      return {
        w: (key.width || 1000) / 1000,
        h: (key.height || 1000) / 1000,
        x: (key.x || 0) / 1000,
        y: (key.y || 0) / 1000,
        r: (key.r || 0) / 10,
        rx: (key.rx || 0) / 1000,
        ry: (key.ry || 0) / 1000
      };
    });
  })[0] || [];

  return { keymap, layout };
}

export async function saveChanges(conn: ZmkStudioConnection) {
  await callRpc(conn, {
    keymap: { saveChanges: true }
  });
}
