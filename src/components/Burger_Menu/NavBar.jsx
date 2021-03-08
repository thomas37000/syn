/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './syn.png';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 7vh;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    width: 55px;
    height: 55px;
    margin-left: 30px;
    border-radius: 50%;
  }

  @media (max-width: 765px) {
    .logo {
      display: flex;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <Link to="/admin" />
      <Burger />
    </Nav>
  );
};

export default Navbar;
