import React from "react";

import StarIcon from "@material-ui/icons/Star";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_id, i) => (
                <StarIcon className="product__ratingStar" />
              ))}
          </div>
        </div>

        <img src={image} alt="product image" />

        <button>Add to Basket</button>
      </div>
    </>
  );
}

export default Product;