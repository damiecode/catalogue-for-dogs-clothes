import { CLEAR_ORDER_BY_LETTER, ORDER_BY_ASC, ORDER_BY_DESC } from '../actions';

const orderByReducer = (state = '', action) => {
  switch (action.type) {
    case ORDER_BY_ASC:
      return 'asc';
    case ORDER_BY_DESC:
      return 'desc';
    case CLEAR_ORDER_BY_LETTER:
      return '';
    default:
      return state;
  }
};

export default orderByReducer;
