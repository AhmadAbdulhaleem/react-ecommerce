import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product, fetchProductDetails, clicked }) => {
  return (
    <div id="wrapper">
      <div id="content">
        <div className="list">
          <div className="product-card">
            <span className="tag">
              <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />
            </span>
            <h2>{product.title}</h2>
            <h4>{product.company}</h4>
            <figure>
              <Link to={'/product/' + product.id}>
                <img
                  onClick={() => fetchProductDetails(product.id)}
                  src={`../../${product.img}`}
                  alt={product.title}
                />
              </Link>
            </figure>

            <span className="price">$ {product.price}</span>
            <button
              disabled={product.inCart ? true : false}
              onClick={clicked}
              className="cart-btn btn-sm"
              style={{ border: 'none' }}
            >
              {product.inCart ? 'In Cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
