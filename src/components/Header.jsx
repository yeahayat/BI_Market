import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src="/images/logo.png" width="110" height="30" />
        <nav className="nav">
          <Link to="/">Главная</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
