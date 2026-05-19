import '@fortawesome/fontawesome-free/css/all.css'
import keyBy from 'lodash/keyBy'
import { useMemo, useState } from 'react'

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

function App() {
  const [definitions, setDefinitions] = useState(null)
  const [source, setSource] = useState(null)
  const [sourceOther, setSourceOther] = useState(null)
  const [layout, setLayout] = useState(null)
  const [keymap, setKeymap] = useState(null)
  const [editingKeymap, setEditingKeymap] = useState(null)
  const [saving, setSaving] = useState(false)
  const [keyboardLayout, setKeyboardLayout] = useState(localStorage.getItem('keyboardLayout') || 'US')

  const handleLayoutChange = useMemo(() => function(newLayout) {
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

  const handleCommitChanges = useMemo(() => function() {
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

  const handleDownloadKeymapJSON = useMemo(() => function() {
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

  const handleDownloadKeymapDTS = useMemo(() => function() {
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

  const handleKeyboardSelected = useMemo(() => function(event) {
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

  const initialize = useMemo(() => {
    return async function () {
      const [keycodes, behaviours] = await Promise.all([
        loadKeycodes(),
        loadBehaviours()
      ])

      keycodes.indexed = keyBy(keycodes, 'code')
      behaviours.indexed = keyBy(behaviours, 'code')

      setDefinitions({ keycodes, behaviours })
    }
  }, [setDefinitions])

  const handleUpdateKeymap = useMemo(() => function(keymap) {
    setEditingKeymap(keymap)
  }, [setEditingKeymap])

  return (
    <>
      <Loader load={initialize}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '10px' }}>
          <KeyboardPicker onSelect={handleKeyboardSelected} />
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
