import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title.js";
import { ProductConsumer } from "../context.js";

export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
        <div class="py-5">
          <div class="container">
            <Title name="Product" title="List" />
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
