import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/Products/Products.js';
import NavigationBar from './components/UI/Navbar/Navbar.js';
import ProductDetails from './components/Products/ProductDetails/ProductDetails.js';
import Cart from './components/Cart/Cart.js';
import { products } from './data';
import NotFound from './components/404/404.js';

class App extends Component {
  state = {
    products: [],
    productDetails: null,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentWillMount() {
    this.insertProducts();
  }

  insertProducts = () => {
    let oldProducts = [];
    products.forEach(item => {
      const singleItem = { ...item };
      oldProducts = [...oldProducts, singleItem];
    });
    this.setState({ products: oldProducts });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  getDetails = id => {
    const products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const fetchedProduct = products[index];
    this.setState({ productDetails: fetchedProduct });
  };

  addToCart = prod => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(prod.id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState({ products: tempProducts, cart: [...this.state.cart, product] }, () => {
      this.addTotals();
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
  };

  clearCart = () => {
    this.setState({ cart: [] }, this.insertProducts(), this.addTotals());
  };

  increment = id => {
    let oldCart = [...this.state.cart];
    const selectedProduct = oldCart.find(item => item.id === id);
    const index = oldCart.indexOf(selectedProduct);
    const product = oldCart[index];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState({ cart: [...oldCart] }, this.addTotals());
  };

  decrement = id => {
    let oldCart = [...this.state.cart];
    const selectedProduct = oldCart.find(item => item.id === id);
    const index = oldCart.indexOf(selectedProduct);
    const product = oldCart[index];
    product.count -= 1;
    product.total = product.count * product.price;
    this.setState({ cart: [...oldCart] }, this.addTotals());
  };

  handleDelete = id => {
    let oldProducts = [...this.state.products];
    let oldCart = [...this.state.cart];

    oldCart = oldCart.filter(c => c.id !== id);
    const index = oldProducts.indexOf(this.getItem(id));
    let deletedProduct = oldProducts[index];
    deletedProduct.inCart = false;
    deletedProduct.count = 0;
    deletedProduct.total = 0;

    this.setState({ cart: [...oldCart], products: [...oldProducts] }, this.addTotals());
  };

  render() {
    return (
      <div className="App">
        <NavigationBar countProducts={this.state.cart.length} />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Products
                  products={this.state.products}
                  getDetails={this.getDetails}
                  add={this.addToCart}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  productsCart={this.state.cart}
                  cartSubTotal={this.state.cartSubTotal}
                  cartTax={this.state.cartTax}
                  cartTotal={this.state.cartTotal}
                  increment={this.increment}
                  decrement={this.decrement}
                  clearCart={this.clearCart}
                  handleDelete={this.handleDelete}
                />
              )}
            />
            <Route
              path="/product/:id"
              render={() => (
                <ProductDetails productData={this.state.productDetails} add={this.addToCart} />
              )}
            />

            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
