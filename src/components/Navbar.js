import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper class="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon Creative 
    Commons (Atribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} class="navbar_Brand" alt="Phone Icon" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li class="nav-item">
            <Link to="/" class="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/Cart" class="ml-auto">
          <ButtonContainer>
            My Cart
            <span class="ml-2">
              <i className="fas fa-shopping-cart" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
`;
