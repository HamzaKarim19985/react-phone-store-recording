import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const { id, title, img, price, count, total } = this.props.item;
    const { decrement, increment, removeItem } = this.props.value;

    return (
      <div class="row my-1 text-center">
        <div class="col-10 mx-auto col-lg-2">
          <img
            src={img}
            class="img-fluid "
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Product:</span>
          {title}
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Price:</span>
          {price}$
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span
            class="btn btn-black mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </span>
          <span class="btn btn-black mx-1">{count}</span>

          <span
            class="btn btn-black mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +
          </span>
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <div
            class="cart-icon"
            onClick={() => {
              removeItem(id);
            }}
          >
            <i class="fas fa-trash" />
          </div>
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Total:</span>
          {total}$
        </div>
      </div>
    );
  }
}
