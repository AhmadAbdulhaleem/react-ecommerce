import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PayPal from './PayPal';

import Table from '../Table/Table';

class Cart extends Component {
  render() {
    if (this.props.productsCart.length > 0) {
      return (
        <div className="row col-12">
          <Table
            products={this.props.productsCart}
            increment={this.props.increment}
            decrement={this.props.decrement}
            handleDelete={this.props.handleDelete}
          />
          <div className="clearCart float-right" style={{ marginLeft: 'auto', marginTop: '20px' }}>
            <Link to="/">
              <button className="btn btn-outline-danger" onClick={this.props.clearCart}>
                Clear Cart
              </button>
            </Link>

            <div className="info" style={{ marginTop: '20px' }}>
              <h5>
                <span className="text-title">Subtotal: </span>
                <strong>$ {this.props.cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">Tax: </span>
                <strong>$ {this.props.cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title">Total: </span>
                <strong>$ {this.props.cartTotal}</strong>
              </h5>
              <PayPal total={this.props.cartTotal} onClick={this.props.clearCart} />
            </div>
          </div>
        </div>
      );
    } else {
      return <p>No items</p>;
    }
  }
}

export default Cart;
