import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title.js";
import { ProductConsumer, ProductContext } from "../context.js";

export default class ProductList extends Component {
  state = {
    products: [],
    filteredArr: [],
    query: ""
  };

  render() {
    return (
      <React.Fragment>
        <div class="py-5">
          <div class="container">
            <div class="heading">
              <h1 class="text-capitalize font-weight-bold ">
                Mobile
                <strong class="text-blue"> Clinic</strong>
              </h1>
            </div>

            <div class="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(e => {
                    return <Product key={e.id} product={e} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
