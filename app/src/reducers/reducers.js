import quotesData from '../quotesData';
import {
  ADD_QUOTE,
  DELETE_QUOTE,
  MAKE_QUOTE_OF_THE_DAY,
  MARK_FAVOURITE 
} from '../actions/actionTypes';

export function quotesReducer(sliceOfState = quotesData, action) {
  switch (action.type) {
    case DELETE_QUOTE:
      return sliceOfState.filter(quote => quote.id !== action.payload);
    case ADD_QUOTE:
      return [...sliceOfState, action.payload];
    case MARK_FAVOURITE:
      return sliceOfState.map(quote => {
        if (quote.id === action.payload) {
          return { ...quote, favourite: !quote.favourite };
        }
        return quote;
      });
    default:
      return sliceOfState;
  }
}

export function quoteOfTheDayReducer(sliceOfState = null, action) {
  switch (action.type) {
    case MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case DELETE_QUOTE:
      if (action.payload === sliceOfState) {
        return null
      }
      return sliceOfState;
    default:
      return sliceOfState;
  }
}