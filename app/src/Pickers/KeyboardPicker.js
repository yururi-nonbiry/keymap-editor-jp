import compact from 'lodash/compact'
import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import * as config from '../config'
import { loadLayout } from '../layout.js'
import { loadKeymap } from '../keymap.js'
import { healthcheck } from '../api.js'
import Selector from "../Common/Selector"
import GithubPicker from './Github/Picker'
import OfflinePicker from './OfflinePicker'

function KeyboardPicker(props) {
  const { onSelect, hasKeyboardLoaded } = props
  const [backendConnected, setBackendConnected] = useState(false)
  const [checkingBackend, setCheckingBackend] = useState(true)
  const [source, setSource] = useState(null)
  const isFirstRender = useRef(true)

  const sourceChoices = useMemo(() => {
    if (checkingBackend) {
      return []
    }
    if (backendConnected) {
      return compact([
        config.enableLocal ? { id: 'local', name: 'Local' } : null,
        config.enableGitHub ? { id: 'github', name: 'GitHub' } : null,
        { id: 'upload', name: 'File Upload (Offline)' }
      ])
    } else {
      return [{ id: 'upload', name: 'File Upload (Offline)' }]
    }
  }, [backendConnected, checkingBackend])

  useEffect(() => {
    if (!config.apiBaseUrl || config.apiBaseUrl === 'undefined') {
      setBackendConnected(false)
      setCheckingBackend(false)
      return
    }
    healthcheck()
      .then(res => {
        if (res.status === 200) {
          setBackendConnected(true)
        } else {
          setBackendConnected(false)
        }
      })
      .catch(() => {
        setBackendConnected(false)
      })
      .finally(() => {
        setCheckingBackend(false)
      })
  }, [])

  useEffect(() => {
    if (checkingBackend) return
    const selectedSource = localStorage.getItem('selectedSource')
    const onlySource = sourceChoices.length === 1 ? sourceChoices[0].id : null
    const defaultSource = onlySource || (
      sourceChoices.find(src => src.id === selectedSource)
        ? selectedSource
        : sourceChoices[0]?.id || null
    )
    setSource(defaultSource)
  }, [checkingBackend, sourceChoices])

  const handleKeyboardSelected = useCallback((event) => {
    const { layout, keymap, ...rest } = event

    const layerNames = keymap.layer_names || keymap.layers.map((_, i) => `Layer ${i}`)
    Object.assign(keymap, {
      layer_names: layerNames
    })

    onSelect({ source, layout, keymap, ...rest })
  }, [onSelect, source])

  const fetchLocalKeyboard = useCallback(async () => {
    try {
      const [layout, keymap] = await Promise.all([
        loadLayout(),
        loadKeymap()
      ])

      handleKeyboardSelected({ source, layout, keymap })
    } catch (err) {
      console.error('Failed to load local keyboard', err)
    }
  }, [source, handleKeyboardSelected])

  useEffect(() => {
    if (!source) return
    localStorage.setItem('selectedSource', source)
    if (source === 'local') {
      if (isFirstRender.current && hasKeyboardLoaded) {
        isFirstRender.current = false
        return
      }
      isFirstRender.current = false
      fetchLocalKeyboard()
    }
  }, [source, fetchLocalKeyboard, hasKeyboardLoaded])

  return (
    <div>
      {checkingBackend ? (
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          Checking backend connection...
        </div>
      ) : (
        <>
          <Selector
            id="source"
            label="Source"
            value={source}
            choices={sourceChoices}
            onUpdate={value => {
              setSource(value)
              onSelect(value)
            }}
          />

          {source === 'github' && (
            <GithubPicker onSelect={handleKeyboardSelected} hasKeyboardLoaded={hasKeyboardLoaded} />
          )}

          {source === 'upload' && (
            <OfflinePicker onSelect={handleKeyboardSelected} />
          )}
        </>
      )}
    </div>
  )
}

KeyboardPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  hasKeyboardLoaded: PropTypes.bool
}

export default KeyboardPicker
