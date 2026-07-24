import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-icon">✂</span>
          <span>Tailor Made</span>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/children">Children</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
