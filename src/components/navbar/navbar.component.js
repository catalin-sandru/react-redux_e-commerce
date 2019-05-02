import React from 'react'
// import logo from '../../asset/logo.svg'
import { Link } from 'react-router-dom'
import { Button } from '../button/button.component';
import { NavStyle } from './navbar.style';
import { LogoIcon } from '../../asset/icons'
import { CartIcon } from '../../asset/icons'

const Navbar = () => (
  <NavStyle>
    <div className="nav_list">
      <div className="navbar_nav">
        <LogoIcon />
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <Link to="/cart">
        <Button 
          buttonText="My Cart" 
          icon={<CartIcon/>}
        />
      </Link>
    </div>
  </NavStyle>
)

export default Navbar