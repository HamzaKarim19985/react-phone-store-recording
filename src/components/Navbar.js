import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper class="navbar navbar-expand-md bg-primary px-sm-5">
        <ul className="nav nav-tabs">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
            >
              Profile
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                <Link to="/forms">Sign in</Link>
              </a>
              <a class="dropdown-item" href="#">
                <Link to="/forms">Sign Out</Link>
              </a>
              <a class="dropdown-item" href="#">
                <Link to="/forms">Register</Link>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <Link to="/" class="ml-auto">
                  Home
                </Link>
              </a>
            </div>
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
  display: flex;
  flex-direction: row;
`;
