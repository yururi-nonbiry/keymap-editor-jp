import { useState } from 'react'
import PropTypes from 'prop-types'
import { parseKeymap } from '../keymapGenerator'
import ValidationErrors from './Github/ValidationErrors'

function OfflinePicker({ onSelect }) {
  const [layoutFile, setLayoutFile] = useState(null)
  const [keymapFile, setKeymapFile] = useState(null)
  const [layoutData, setLayoutData] = useState(null)
  const [keymapData, setKeymapData] = useState(null)
  const [error, setError] = useState(null)

  const handleLayoutChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setLayoutFile(file)
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result)
        let layout = null
        if (json.layouts) {
          const firstLayoutKey = Object.keys(json.layouts)[0]
          layout = json.layouts[firstLayoutKey].layout
        } else if (Array.isArray(json)) {
          layout = json
        } else if (json.layout) {
          layout = json.layout
        }

        if (!layout || !Array.isArray(layout)) {
          throw new Error('Invalid layout JSON. Must define a "layouts" object or be a layouts array.')
        }

        setLayoutData(layout)
        setError(null)
      } catch (err) {
        setError({ name: 'Layout File Error', errors: [err.message] })
        setLayoutFile(null)
        setLayoutData(null)
      }
    }
    reader.readAsText(file)
  }

  const handleKeymapChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setKeymapFile(file)
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result)
        if (!json.layers || !Array.isArray(json.layers)) {
          throw new Error('Invalid keymap JSON. Must contain a "layers" array.')
        }

        const parsed = parseKeymap(json)
        setKeymapData(parsed)
        setError(null)
      } catch (err) {
        setError({ name: 'Keymap File Error', errors: [err.message] })
        setKeymapFile(null)
        setKeymapData(null)
      }
    }
    reader.readAsText(file)
  }

  const handleLoad = () => {
    if (layoutData && keymapData) {
      onSelect({
        layout: layoutData,
        keymap: keymapData,
        source: 'upload'
      })
    }
  }

  return (
    <div className="offline-picker" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h3>Offline Mode - File Upload</h3>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        Please upload your layout and keymap JSON files to start editing offline.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Keyboard Layout File (info.json):</label>
        <input type="file" accept=".json" onChange={handleLayoutChange} />
        {layoutFile && <span style={{ color: 'green', fontSize: '0.85em' }}>✓ Loaded: {layoutFile.name}</span>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Keymap JSON File (keymap.json):</label>
        <input type="file" accept=".json" onChange={handleKeymapChange} />
        {keymapFile && <span style={{ color: 'green', fontSize: '0.85em' }}>✓ Loaded: {keymapFile.name}</span>}
      </div>

      {error && (
        <ValidationErrors
          title={error.name}
          errors={error.errors}
          onDismiss={() => setError(null)}
        />
      )}

      <button
        disabled={!layoutData || !keymapData}
        onClick={handleLoad}
        style={{
          padding: '10px 15px',
          backgroundColor: layoutData && keymapData ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: layoutData && keymapData ? 'pointer' : 'not-allowed',
          marginTop: '10px'
        }}
      >
        Load Keymap Editor
      </button>
    </div>
  )
}

OfflinePicker.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default OfflinePicker
