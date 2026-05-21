import compact from 'lodash/compact';
import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';

import * as config from '../config';
import { healthcheck } from '../api';
import Selector from "../Common/Selector";
import GithubPicker from './Github/Picker';

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
  const isFirstRender = useRef(true);

  const sourceChoices = useMemo(() => {
    if (checkingBackend) {
      return [];
    }
    if (backendConnected) {
      return compact([
        config.enableLocal ? { id: 'local', name: 'Local' } : null,
        config.enableGitHub ? { id: 'github', name: 'GitHub' } : null,
        { id: 'upload', name: 'File Upload (Offline)' }
      ]);
    } else {
      return [{ id: 'upload', name: 'File Upload (Offline)' }];
    }
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

  const handleKeyboardSelected = useCallback((event: any) => {
    const { layout, keymap, ...rest } = event;

    const layerNames = keymap.layer_names || keymap.layers.map((_: any, i: number) => `Layer ${i}`);
    Object.assign(keymap, {
      layer_names: layerNames
    });

    onSelect({ source, layout, keymap, ...rest });
  }, [onSelect, source]);

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
        </>
      )}
    </div>
  );
}

export default KeyboardPicker;
