import React from 'react'
import logo from '../../images/logo.svg';
import './index.css'

export default function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>
          Stylitics x React
      </h1>
    </header>
  )
}
