import React, { ReactNode } from 'react';

interface DialogBoxProps {
  dismissText?: string;
  onDismiss: () => void;
  children: ReactNode;
  className?: string;
}

export default function DialogBox(props: DialogBoxProps) {
  const { dismissText = 'Ok', onDismiss, children, className = '' } = props

  return (
    <div className={`dialog-box ${className}`}>
      {children}
      {dismissText && (
        <button className="dialog-box-dismiss" onClick={onDismiss}>
          {dismissText}
        </button>
      )}
    </div>
  )
}

