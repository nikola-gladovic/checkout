import { useSelector, useDispatch } from "react-redux";

export const useAllProducts = () => useSelector(({
  product: { allProducts }
}) => allProducts);
