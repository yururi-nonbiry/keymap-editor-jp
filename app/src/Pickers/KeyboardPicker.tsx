import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';

import * as config from '../config';
import { healthcheck } from '../api';
import Selector from "../Common/Selector";
import GithubPicker from './Github/Picker';
import { connectSerial, connectBle, checkLockState, getKeyboardKeymap, disconnectDevice } from '../api/zmkStudioService';

interface KeyboardPickerProps {
  onSelect: (event: any) => void;
  hasKeyboardLoaded?: boolean;
  layoutFileName?: string | null;
  keymapFileName?: string | null;
  onOpenFileModal?: () => void;
}

function KeyboardPicker({ onSelect, hasKeyboardLoaded, layoutFileName, keymapFileName, onOpenFileModal }: KeyboardPickerProps) {
  const [backendConnected, setBackendConnected] = useState(false);
  const [checkingBackend, setCheckingBackend] = useState(true);
  const [source, setSource] = useState<string | null>(null);
  const [conn, setConn] = useState<any>(null);
  const [connecting, setConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [lockStatus, setLockStatus] = useState<'locked' | 'unlocked' | null>(null);
  const isFirstRender = useRef(true);

  const sourceChoices = useMemo(() => {
    if (checkingBackend) {
      return [];
    }
    const choices = [];
    if (backendConnected) {
      if (config.enableLocal) choices.push({ id: 'local', name: 'Local' });
      if (config.enableGitHub) choices.push({ id: 'github', name: 'GitHub' });
    }
    
    // Add USB and BLE if supported by browser
    if ('serial' in navigator) {
      choices.push({ id: 'usb', name: 'USB (ZMK Studio)' });
    }
    if ('bluetooth' in navigator) {
      choices.push({ id: 'ble', name: 'Bluetooth (ZMK Studio)' });
    }
    
    choices.push({ id: 'upload', name: 'File Upload (Offline)' });
    return choices;
  }, [backendConnected, checkingBackend]);

  useEffect(() => {
    if (!config.apiBaseUrl || config.apiBaseUrl === 'undefined') {
      setBackendConnected(false);
      setCheckingBackend(false);
      return;
    }
    healthcheck()
      .then(res => {
        if (res.status === 200) {
          setBackendConnected(true);
        } else {
          setBackendConnected(false);
        }
      })
      .catch(() => {
        setBackendConnected(false);
      })
      .finally(() => {
        setCheckingBackend(false);
      });
  }, []);

  useEffect(() => {
    if (checkingBackend) return;
    const selectedSource = localStorage.getItem('selectedSource');
    const onlySource = sourceChoices.length === 1 ? sourceChoices[0].id : null;
    const defaultSource = onlySource || (
      sourceChoices.find(src => src.id === selectedSource)
        ? selectedSource
        : sourceChoices[0]?.id || null
    );
    setSource(defaultSource);
  }, [checkingBackend, sourceChoices]);

  // Clean up connection on unmount or source change
  useEffect(() => {
    return () => {
      if (conn) {
        disconnectDevice(conn);
      }
    };
  }, [conn]);

  const handleKeyboardSelected = useCallback((event: any) => {
    const { layout, keymap, ...rest } = event;

    const layerNames = keymap.layer_names || keymap.layers.map((_: any, i: number) => `Layer ${i}`);
    Object.assign(keymap, {
      layer_names: layerNames
    });

    onSelect({ source, layout, keymap, ...rest });
  }, [onSelect, source]);

  const handleConnect = useCallback(async () => {
    setConnecting(true);
    setConnectionError(null);
    setLockStatus(null);
    let activeConn: any = null;
    try {
      if (source === 'usb') {
        activeConn = await connectSerial();
      } else if (source === 'ble') {
        activeConn = await connectBle();
      }
      
      if (!activeConn) return;

      // Check lock state
      let isLocked = await checkLockState(activeConn);
      if (isLocked) {
        setLockStatus('locked');
        let attempts = 0;
        while (isLocked && attempts < 30) {
          await new Promise(resolve => setTimeout(resolve, 1500));
          try {
            isLocked = await checkLockState(activeConn);
          } catch (err) {}
          attempts++;
        }
        if (isLocked) {
          throw new Error('ロック解除タイムアウト。キーボードの &studio_unlock キーを押してください。');
        }
      }

      setLockStatus('unlocked');
      
      const { keymap, layout } = await getKeyboardKeymap(activeConn);
      setConn(activeConn);
      
      onSelect({
        source,
        layout,
        keymap,
        conn: activeConn
      });
    } catch (e: any) {
      console.error('Connection failed', e);
      setConnectionError(e.message || '接続に失敗しました。');
      if (activeConn) {
        await disconnectDevice(activeConn);
      }
    } finally {
      setConnecting(false);
    }
  }, [source, onSelect]);

  const fetchLocalKeyboard = useCallback(async () => {
    try {
      // @ts-ignore
      const { loadLayout } = await import('../layout');
      // @ts-ignore
      const { loadKeymap } = await import('../keymap');
      
      const [layout, keymap] = await Promise.all([
        loadLayout(),
        loadKeymap()
      ]);

      handleKeyboardSelected({ source, layout, keymap });
    } catch (err) {
      console.error('Failed to load local keyboard', err);
    }
  }, [source, handleKeyboardSelected]);

  useEffect(() => {
    if (!source) return;
    localStorage.setItem('selectedSource', source);
    if (source === 'local') {
      if (isFirstRender.current && hasKeyboardLoaded) {
        isFirstRender.current = false;
        return;
      }
      isFirstRender.current = false;
      fetchLocalKeyboard();
    }
  }, [source, fetchLocalKeyboard, hasKeyboardLoaded]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {checkingBackend ? (
        <div style={{ padding: '5px', textAlign: 'center', color: '#666', fontSize: '0.9em' }}>
          Checking backend...
        </div>
      ) : (
        <>
          <Selector
            id="source"
            label="Source"
            value={source}
            choices={sourceChoices}
            onUpdate={(value: string) => {
              setSource(value);
              onSelect(value);
            }}
          />

          {source === 'github' && (
            <GithubPicker onSelect={handleKeyboardSelected} hasKeyboardLoaded={hasKeyboardLoaded} />
          )}

          {source === 'upload' && (
            <div className="offline-picker" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button
                onClick={onOpenFileModal}
                className="btn-select-files"
              >
                <i className="fas fa-file-upload" /> ファイル選択
              </button>
            </div>
          )}

          {(source === 'usb' || source === 'ble') && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={handleConnect}
                disabled={connecting}
                className="btn-connect-studio"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {connecting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }} />
                    {lockStatus === 'locked' ? 'ロック解除待ち...' : '接続中...'}
                  </>
                ) : (
                  <>
                    <i className={source === 'usb' ? "fab fa-usb" : "fas fa-bluetooth"} style={{ marginRight: '8px' }} />
                    キーボードと接続
                  </>
                )}
              </button>
              {connectionError && (
                <div style={{ color: '#dc3545', fontSize: '0.9em', fontWeight: 'bold' }}>
                  {connectionError}
                </div>
              )}
              {conn && !connecting && (
                <div style={{ color: '#28a745', fontSize: '0.9em', fontWeight: 'bold' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '6px' }} />
                  接続済み
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default KeyboardPicker;
