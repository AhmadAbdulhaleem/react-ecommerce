import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ productData, add }) => {
  return (
    <div key={productData.id}>
      <div className="row">
        <div className="col-md-7 col-xs-12">
          <img data-image="black" src={`../../${productData.img}`} alt={productData.title} />
        </div>

        <div className="col-md-5 col-xs-12">
          <div className="product-description">
            <span>{productData.company}</span>
            <h1>{productData.title}</h1>

            <p>{productData.info}</p>
          </div>

          <div className="product-price">
            <span>{productData.price}$</span>
            <button
              disabled={productData.inCart ? true : false}
              onClick={() => add(productData)}
              className="cart-btn btn-sm"
            >
              {productData.inCart ? 'In Cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
