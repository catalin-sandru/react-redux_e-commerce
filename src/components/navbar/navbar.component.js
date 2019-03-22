import React from 'react'
import logo from '../../asset/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../button/button.component';
import { NavStyle } from './navbar.style';

const Navbar = () => (
  <NavStyle>
      <img src={logo} alt="logo"/>

      <Link to="/">
        Home
      </Link>
      
      <Link to="/cart">
        <Button />
      </Link>
  </NavStyle>
)

export default Navbar