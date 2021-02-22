import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

import { useUpdateProduct } from "../../hooks/redux";
import useStyles from "./style";

const ProductEditorPanel = ({ isOpen, closePanel, product }) => {
  const classes = useStyles();
  const updateProduct = useUpdateProduct();
  const [openState, setOpenState] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setOpenState(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setPrice(product.price || 0);
  }, [product.price])

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if (!open) {
      closePanel();
    }
  };

  const handleSave = useCallback(() => {
    updateProduct({
      ...product,
      price
    });
    closePanel();
  }, [price, product, updateProduct, closePanel]);

  return (
    <div>
      <SwipeableDrawer
        anchor={'top'}
        open={openState}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        className={classes.swipeableDrawer}
      >
        <div
          className={classes.viewer}
          role="presentation"
        >
          <div className={classes.header}>
            <h3>Product Editor</h3>
          </div>
          <div className={classes.body}>
            <div className="form-control">
              <label>Name: </label>
              <span>{product.name}</span>
            </div>
            <div className="form-control">
              <label>Price: </label>
              <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
            </div>
          </div>
          <div className={classes.footer}>
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
            <Button variant="contained" onClick={closePanel}>Cancel</Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

ProductEditorPanel.propTypes = {
  isOpen: PropTypes.bool,
  closePanel: PropTypes.func,
  product: PropTypes.object
};

ProductEditorPanel.defaultProps = {
  isOpen: false,
  closePanel: () => {},
  product: {},
};

export default ProductEditorPanel;
