import React, { Component } from 'react';

import Product from './Product/Product';
import Spinner from '../Spinner/Spinner';

class Products extends Component {
  state = {
    loading: false,
    products: [],
  };

  componentWillMount() {
    this.setState({ products: this.props.products, loading: true });
  }

  render() {
    let product = this.state.products.map(product => {
      return (
        <div key={product.id} className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
          <Product
            clicked={() => this.props.add(product)}
            product={product}
            fetchProductDetails={this.props.getDetails}
          />
        </div>
      );
    });

    if (this.state.loading === false) {
      product = (
        <div className="col-12">
          <Spinner />
        </div>
      );
    }
    return <div className="row">{product}</div>;
  }
}

export default Products;
