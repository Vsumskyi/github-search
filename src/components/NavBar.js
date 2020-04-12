import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const links = [
    {to:"/", label: 'Головна', exact: true }, 
    {to:"/about", label: 'Інформація'}, 
    {to:"/profile/:name", label: 'Профіль'}, 
    ]

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        Github Search
      </div>
      <ul className="navbar-nav">
        {links.map((link, index) => 
            <li key={link.label + index}>
              <NavLink to={link.to} className="nav-link" exact={link.exact}> {link.label} </NavLink>
            </li>
        )}
      </ul>
    </nav>
  )
}
