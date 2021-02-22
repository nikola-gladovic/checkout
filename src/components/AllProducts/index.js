import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';

import { useAllProducts } from "../../hooks/redux";
import useStyles from "./style";
import ProductEditorPanel from "../ProductEditorPanel";

const AllProducts = ({ boughtProducts, setBoughtProducts }) => {
  const classes = useStyles();
  const allProducts = useAllProducts();
  const [editProductNo, setEditProductNo] = useState(null);

  const addToCart = useCallback((product) => {
    setBoughtProducts([...boughtProducts, {productId: product.id }]);
  }, [boughtProducts, setBoughtProducts]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2>All Products</h2>
      </div>
      <div className={classes.body}>
        {allProducts.map((product, index) => (
          <div key={product.id} className={classes.product}>
            <div className="row">
              <div className="name">
                <h3>{product.name}</h3>
              </div>
              <div className="price">
                <span className="label">Price: </span>
                <span className="content">{product.price}</span>
              </div>
            </div>
            <div className="row">
              <div className="actions">
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                <Button variant="contained" color="primary" onClick={() => setEditProductNo(index + 1)}>Edit Product</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductEditorPanel
        isOpen={Boolean(editProductNo)}
        closePanel={() => setEditProductNo(null)}
        product={allProducts[editProductNo - 1]}
      />
    </div>
  );
};

AllProducts.propTypes = {
  boughtProducts: PropTypes.array,
  setBoughtProducts: PropTypes.func,
};

AllProducts.defaultProps = {
  boughtProducts: [],
  setBoughtProducts: () => {},
};

export default AllProducts;
