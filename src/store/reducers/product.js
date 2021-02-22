import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  allProducts: [
    {
      id: 1,
      name: 'Apple',
      price: 30,
      offer: {
        count: 2,
        price: 45,
      }
    },
    {
      id: 2,
      name: 'Banana',
      price: 50,
      offer: {
        count: 3,
        price: 130,
      }
    },
    {
      id: 3,
      name: 'Peach',
      price: 60,
    },
    {
      id: 4,
      name: 'Kiwi',
      price: 20,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
