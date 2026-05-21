import React, { ReactNode } from "react"
import ReactDOM from "react-dom"

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.5)', /* Modern dark translucent overlay */
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
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
