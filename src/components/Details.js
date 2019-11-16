import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/*Title*/}
              <div className="row">
                <div className="col-10 text-center text-blue text-slanted mx-auto my-5 ">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                {/*Image w/ Product Info*/}
                <div className="col-10 mx-auto my-5 ">
                  <img src={img} class="img-fluid" />
                </div>
                <div className="col-10 mx-auto my-5 ">
                  <h2>Model: {title}</h2>
                  <h3>
                    Made By:
                    <span class="text-uppercase font-italic">{company}</span>
                  </h3>
                  <h4 class="text-blue">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p class="font-weight-bold text-capitalize mb-0 mt-3">
                    Info About this Product
                  </p>
                  <p class="lead text-muted">{info}</p>

                  {/*Button*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add to Cart"}
                    </ButtonContainer>
                    :
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
