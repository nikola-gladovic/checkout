import React, { useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

import { useAllProducts } from "../../hooks/redux";
import useStyles from "./style";

const Cart = ({ products, setProducts }) => {
  const classes = useStyles();
  const allProducts = useAllProducts();
  const [totalPrice, setTotalPrice] = useState(0);

  const getProduct = useCallback((productId) => {
    return allProducts.find((product) => product.id === productId);
  }, [allProducts]);

  useEffect(() => {
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += getProduct(product.productId).price;
    });
    setTotalPrice(totalPrice);
  }, [products, getProduct]);

  const removeProduct = useCallback((index) => {
    setProducts(products.filter((_, i) => index !== i));
  }, [products, setProducts]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2>Cart</h2>
      </div>
      <div className={classes.body}>
        <div className="head">
          <span className="no">No</span>
          <span className="name">Product name</span>
        </div>
        {products.map((product, index) => (
          <div key={index} className={classes.product}>
            <span className="no">{index + 1}</span>
            <span className="name">{getProduct(product.productId)?.name}</span>
            <Button className="action" onClick={() => removeProduct(index)}>Remove</Button>
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <span className="label">Total price:</span>
        <span className="price">{totalPrice}</span>
      </div>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func
};

Cart.defaultProps = {
  products: [],
  setProducts: () => {},
};

export default Cart;
