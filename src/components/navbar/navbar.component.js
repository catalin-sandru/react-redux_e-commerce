import React from 'react'
import logo from '../../asset/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../button/button.component';
import { NavStyle } from './navbar.style';

const Navbar = () => (
  <NavStyle>
    <div className="navbar_nav">
      <img src={logo} alt="logo"/>
      <Link to="/">
        Home
      </Link>
    </div>
    <Link to="/cart">
      <Button />
    </Link>
  </NavStyle>
)

export default Navbar