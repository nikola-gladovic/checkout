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
  const [offerCount, setOfferCount] = useState({});
  const [offerPrice, setOfferPrice] = useState({});
  const [canBeOffered, setCanBeOffered] = useState(true);

  useEffect(() => {
    setOpenState(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setPrice(product.price || 0);
    setOfferCount(product.offer?.count || 0);
    setOfferPrice(product.offer?.price || 0);
  }, [product]);

  useEffect(() => {
    if (offerPrice !== 0 || offerCount !== 0) {
      if (offerPrice < price * offerCount && offerPrice > price * (offerCount - 1)) {
        setCanBeOffered(true);
      } else {
        setCanBeOffered(false);
      }
    } else {
      setCanBeOffered(true);
    }
  }, [price, offerPrice, offerCount]);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if (!open) {
      closePanel();
    }
  };

  const handleSave = useCallback(() => {
    if (canBeOffered) {
      const offer = offerCount ? {
        count: offerCount,
        price: offerPrice
      } : undefined;
      updateProduct({
        ...product,
        price,
        offer
      });
      closePanel();
    }
  }, [price, product, updateProduct, closePanel, offerCount, offerPrice, canBeOffered]);

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
              <span className="name">{product.name}</span>
            </div>
            <div className="form-control">
              <label>Price: </label>
              <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
            </div>
            <div className="form-control">
              <label>Offer: </label>
              <div className="offer">
                <input type="number" value={offerCount} onChange={(e) => setOfferCount(parseFloat(e.target.value))} />
                <span>for</span>
                <input type="number" value={offerPrice} onChange={(e) => setOfferPrice(parseFloat(e.target.value))} />
                {!canBeOffered &&
                <div className="alert">Cannot offer {offerCount || 0} for {offerPrice || 0}</div>
                }
              </div>
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
