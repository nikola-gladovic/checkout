import { useSelector, useDispatch } from "react-redux";

import { updateProduct } from "../../store/actions/product";

export const useAllProducts = () => useSelector(({
  product: { allProducts }
}) => allProducts);

export const useUpdateProduct = () => {
  const dispatch = useDispatch();
  return (product) => dispatch(updateProduct(product));
};
