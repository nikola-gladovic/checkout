import React, { useState } from "react";
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

//components
import Cart from "../../components/Cart";

const defaultBoughtProducts = [
  {
    productId: 1,
  },
  {
    productId: 2,
  },
  {
    productId: 4,
  },
  {
    productId: 2,
  },
  {
    productId: 3,
  },
  {
    productId: 1,
  },
];

const Checkout = () => {
  const [boughtProducts, setBoughtProducts] = useState(defaultBoughtProducts);

  return (
    <Container>
      <Cart products={boughtProducts} />
    </Container>
  )
};

export default Checkout;
