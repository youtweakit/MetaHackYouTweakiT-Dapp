import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/home'>Главная</Link></li>
        <li><Link to='/bal'>Бренд</Link></li>
        <li><Link to='/customer'>Потребитель</Link></li>
      </ul>
    </nav>
    <hr />
  </header>
)