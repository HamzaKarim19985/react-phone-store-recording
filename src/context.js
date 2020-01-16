import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data.js";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }
  addTotals = () => {
    let subTotal = 0;

    this.state.cart.map(item => {
      subTotal += item.total;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
      }
    );
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  };

  decrement = id => {
    const tempCart = [...this.state.cart];
    const selectProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count == 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: tempCart };
        },
        () => this.addTotals()
      );
    }
  };

  increment = id => {
    const tempCart = [...this.state.cart];
    const selectProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => this.addTotals()
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product
      };
    });
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);

    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const removedProduct = tempProducts[index];
    removedProduct.count = 0;
    removedProduct.total = 0;
    removedProduct.inCart = false;

    this.setState(
      () => {
        return { products: tempProducts, cart: tempCart };
      },
      () => {
        this.addTotals();
      }
    );
  };
  setProducts = () => {
    let tempProduct = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });

    this.setState(() => {
      {
        return { products: tempProduct };
      }
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.count = 1;
    product.inCart = true;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider,ProductContext };
