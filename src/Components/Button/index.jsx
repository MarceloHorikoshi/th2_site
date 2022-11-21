import React from 'react'

import styles from './button.module.css'

export default function Button({ text }) {

  return (
    <div className={styles.button}>

      <div className={styles.textButton}>
        {text}
      </div>

    </div>
  )
}
