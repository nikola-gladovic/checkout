import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

//components
import Cart from "../../components/Cart";
import AllProducts from "../../components/AllProducts";

const defaultBoughtProducts = [
  {
    productId: 1,
  },
  {
    productId: 3,
  },
  {
    productId: 4,
  },
  {
    productId: 2,
  },
];

const Checkout = () => {
  const [boughtProducts, setBoughtProducts] = useState(defaultBoughtProducts);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <AllProducts boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} />
        </Grid>
        <Grid item xs={4}>
          <Cart products={boughtProducts} setProducts={setBoughtProducts} />
        </Grid>
      </Grid>
    </Container>
  )
};

export default Checkout;
