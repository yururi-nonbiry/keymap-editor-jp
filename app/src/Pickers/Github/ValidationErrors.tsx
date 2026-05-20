import React from "react"
import DialogBox from "../../Common/DialogBox"
import Modal from "../../Common/Modal"

function fileFromTitle(title: string) {
  if (title === 'InfoValidationError') {
    return 'config/info.json'
  } else if (title === 'KeymapValidationError') {
    return 'config/keymap.json'
  }
}

const listStyle: React.CSSProperties = {
  maxHeight: '300px',
  overflow: 'auto',
  padding: '10px',
  fontFamily: 'monospace',
  fontSize: '80%',
  backgroundColor: '#efefef'
}

const listItemStyle: React.CSSProperties = { margin: '10px' }

interface ValidationErrorsProps {
  onDismiss: () => void;
  title: string;
  errors: string[];
  otherRepoOrBranchAvailable?: boolean;
}

export default function ValidationErrors(props: ValidationErrorsProps) {
  const { onDismiss, title, errors,  otherRepoOrBranchAvailable = false } = props
  const file = fileFromTitle(title)

  return (
    <Modal>
      <DialogBox onDismiss={onDismiss}>
        <h2>{title}</h2>
        {file && (
          <p>Errors in the file <code>{file}</code>.</p>
        )}
        <ul style={listStyle}>
          {errors.map((error, i) => (
            <li key={i} style={listItemStyle}>
              {error}
            </li>
          ))}
        </ul>

        {otherRepoOrBranchAvailable && (
          <p>
            If you have another branch or repository the the required metadata files
            you may switch to them instead.
          </p>
        )}
      </DialogBox>
    </Modal>
  )
}