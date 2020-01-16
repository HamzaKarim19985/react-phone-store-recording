import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbars from "./components/Navbar";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import forms from "./components/form";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbars />

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/Cart" component={Cart} />
        <Route path="/forms" component={forms} />
        <Route component={Default} />
      </Switch>

      <Modal />
    </React.Fragment>
  );
}

export default App;
