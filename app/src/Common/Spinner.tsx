import React, { ReactNode } from 'react'
import styles from './spinner.module.css'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export default function Spinner({ children, ...rest }: SpinnerProps) {
  return (
    <div {...rest} className={styles.spinner}>
      <i className={`${styles.icon} fa fa-spinner`} />
      {children}
    </div>
  )
}
