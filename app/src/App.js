import '@fortawesome/fontawesome-free/css/all.css'
import keyBy from 'lodash/keyBy'
import { useCallback, useMemo, useState, useEffect } from 'react'

import * as config from './config'
import './App.css';
import { DefinitionsContext } from './providers'
import { loadKeycodes } from './keycodes'
import { loadBehaviours } from './api'
import { generateKeymap } from './keymapGenerator'
import KeyboardPicker from './Pickers/KeyboardPicker';
import Spinner from './Common/Spinner';
import Keyboard from './Keyboard/Keyboard'
import GitHubLink from './GitHubLink'
import Loader from './Common/Loader'
import github from './Pickers/Github/api'
import Selector from './Common/Selector'
import { getJpDefinitions } from './jpLayout'
import SavedSessions from './SavedSessions'

function App() {
  const [definitions, setDefinitions] = useState(null)

  // Retrieve saved session on initial render
  const savedSession = useMemo(() => {
    const saved = localStorage.getItem('keymap-editor:last-session')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse last session from storage', e)
      }
    }
    return null
  }, [])

  const [source, setSource] = useState(savedSession?.source || null)
  const [sourceOther, setSourceOther] = useState(savedSession?.sourceOther || null)
  const [layout, setLayout] = useState(savedSession?.layout || null)
  const [keymap, setKeymap] = useState(savedSession?.keymap || null)
  const [editingKeymap, setEditingKeymap] = useState(savedSession?.editingKeymap || null)
  const [saving, setSaving] = useState(false)
  const [keyboardLayout, setKeyboardLayout] = useState(localStorage.getItem('keyboardLayout') || 'US')

  // Autosave session to localStorage
  useEffect(() => {
    if (source || layout || keymap || editingKeymap) {
      const session = {
        source,
        sourceOther,
        layout,
        keymap,
        editingKeymap
      }
      localStorage.setItem('keymap-editor:last-session', JSON.stringify(session))
    } else {
      localStorage.removeItem('keymap-editor:last-session')
    }
  }, [source, sourceOther, layout, keymap, editingKeymap])

  const handleLayoutChange = useCallback((newLayout) => {
    setKeyboardLayout(newLayout)
    localStorage.setItem('keyboardLayout', newLayout)
  }, [setKeyboardLayout])

  const translatedDefinitions = useMemo(() => {
    if (!definitions) return null
    if (keyboardLayout === 'JP') {
      return getJpDefinitions(definitions)
    }
    return definitions
  }, [definitions, keyboardLayout])

  function handleCompile() {
    fetch(`${config.apiBaseUrl}/keymap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingKeymap || keymap)
    })
  }

  const handleCommitChanges = useCallback(() => {
    const { repository, branch } = sourceOther.github

    ;(async function () {
      setSaving(true)
      await github.commitChanges(repository, branch, layout, editingKeymap)
      setSaving(false)

      setKeymap(editingKeymap)
      setEditingKeymap(null)
    })()
  }, [
    layout,
    editingKeymap,
    sourceOther,
    setSaving,
    setKeymap,
    setEditingKeymap
  ])

  const handleDownloadKeymapJSON = useCallback(() => {
    const currentKeymap = editingKeymap || keymap
    if (!currentKeymap) return

    const generated = generateKeymap(layout, currentKeymap)
    const blob = new Blob([generated.json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'keymap.json'
    link.click()
    URL.revokeObjectURL(url)
  }, [layout, keymap, editingKeymap])

  const handleDownloadKeymapDTS = useCallback(() => {
    const currentKeymap = editingKeymap || keymap
    if (!currentKeymap) return

    const generated = generateKeymap(layout, currentKeymap)
    const blob = new Blob([generated.code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'keymap.keymap'
    link.click()
    URL.revokeObjectURL(url)
  }, [layout, keymap, editingKeymap])

  const handleKeyboardSelected = useCallback((event) => {
    if (typeof event === 'string') {
      setSource(event)
      setLayout(null)
      setKeymap(null)
      setEditingKeymap(null)
      return
    }
    const { source, layout, keymap, ...other } = event

    setSource(source)
    setSourceOther(other)
    setLayout(layout)
    setKeymap(keymap)
    setEditingKeymap(null)
  }, [
    setSource,
    setSourceOther,
    setLayout,
    setKeymap,
    setEditingKeymap
  ])

  const handleLoadSession = useCallback((session) => {
    setSource(session.source)
    setSourceOther(session.sourceOther)
    setLayout(session.layout)
    setKeymap(session.keymap)
    setEditingKeymap(session.editingKeymap)
  }, [setSource, setSourceOther, setLayout, setKeymap, setEditingKeymap])

  const initialize = useCallback(async () => {
    const [keycodes, behaviours] = await Promise.all([
      loadKeycodes(),
      loadBehaviours()
    ])

    keycodes.indexed = keyBy(keycodes, 'code')
    behaviours.indexed = keyBy(behaviours, 'code')

    setDefinitions({ keycodes, behaviours })
  }, [setDefinitions])

  const handleUpdateKeymap = useCallback((keymap) => {
    setEditingKeymap(keymap)
  }, [setEditingKeymap])

  const hasKeyboardLoaded = useMemo(() => {
    return !!layout && (!!keymap || !!editingKeymap)
  }, [layout, keymap, editingKeymap])

  return (
    <>
      <Loader load={initialize}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '10px' }}>
          <KeyboardPicker onSelect={handleKeyboardSelected} hasKeyboardLoaded={hasKeyboardLoaded} />
          <Selector
            id="keyboard-layout"
            label="Keyboard Layout"
            value={keyboardLayout}
            choices={[
              { id: 'US', name: 'US Layout' },
              { id: 'JP', name: 'Japanese (JIS) Layout' }
            ]}
            onUpdate={handleLayoutChange}
          />
          <SavedSessions
            currentSession={{ source, sourceOther, layout, keymap, editingKeymap }}
            onLoadSession={handleLoadSession}
          />
        </div>
        <div id="actions">
          {source === 'local' && (
            <button disabled={!editingKeymap} onClick={handleCompile}>
              Save Local
            </button>
          )}
          {source === 'github' && (
            <button
              title="Commit keymap changes to GitHub repository"
              disabled={!editingKeymap}
              onClick={handleCommitChanges}
            >
              {saving ? 'Saving' : 'Commit Changes'}
              {saving && <Spinner />}
            </button>
          )}
          {source === 'upload' && (
            <>
              <button disabled={!(editingKeymap || keymap)} onClick={handleDownloadKeymapJSON}>
                Download keymap.json
              </button>
              <button disabled={!(editingKeymap || keymap)} onClick={handleDownloadKeymapDTS}>
                Download .keymap
              </button>
            </>
          )}
        </div>
        <DefinitionsContext.Provider value={translatedDefinitions}>
          {layout && keymap && (
            <Keyboard
              layout={layout}
              keymap={editingKeymap || keymap}
              onUpdate={handleUpdateKeymap}
            />
          )}
        </DefinitionsContext.Provider>
      </Loader>
      <GitHubLink className="github-link" />
    </>
  );
}

export default App;
