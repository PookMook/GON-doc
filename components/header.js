import React from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

export default () => {
  return(
    <header className={styles.header}>
      <h1>Graph Oject Notation</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/newtypes">New types</Link>
        <a href="https://github.com/MakeItHappenDev/Graph-Object-Notation" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.npmjs.com/package/graph-object-notation" target="_blank" rel="noopener noreferrer">NPM</a>
      </nav>
    </header>
  )
}