import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    //genero nav, con el unlist, con un navlink en cada li
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/about/:info' activeClassName='active'>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to='/contact' activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
