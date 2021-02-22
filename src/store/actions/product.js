import * as actionTypes from "../actionTypes";

export const updateProduct = (product) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_PRODUCT,
    payload: product
  });
};
