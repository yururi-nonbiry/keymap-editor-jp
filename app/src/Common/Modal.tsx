import React, { ReactNode } from "react"
import ReactDOM from "react-dom"

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(104, 123, 162, 0.39)',
    zIndex: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'block'
  }
}

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return ReactDOM.createPortal(
    <div style={styles.wrapper}>
      <div style={styles.content}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}
