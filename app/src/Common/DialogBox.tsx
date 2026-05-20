import React, { ReactNode } from 'react';

const styles = {
  dialog: {
    backgroundColor: 'white',
    padding: '20px 40px',
    margin: '40px',
    maxWidth: '500px',
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.4)',
  },
  button: {
    display: 'block',
    margin: '0 auto'
  }
}

interface DialogBoxProps {
  dismissText?: string;
  onDismiss: () => void;
  children: ReactNode;
}

export default function DialogBox(props: DialogBoxProps) {
  const { dismissText = 'Ok', onDismiss, children } = props

  return (
    <div style={styles.dialog}>
      {children}
      {dismissText && (
        <button style={styles.button} onClick={onDismiss}>
          {dismissText}
        </button>
      )}
    </div>
  )
}
