import uuid from 'uuid';
import { 
  ADD_QUOTE,
  DELETE_QUOTE, 
  MAKE_QUOTE_OF_THE_DAY, 
  MARK_FAVOURITE 
} from './actionTypes';

export function deleteQuote(id) {
  return {
    type: DELETE_QUOTE,
    payload: id,
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}

export function markFavourite(id) {
  return {
    type: MARK_FAVOURITE,
    payload: id,
  };
}

export function addQuote(author, text) {
  return {
    type: ADD_QUOTE,
    payload: {
      author,
      text,
      id: uuid(),
      favourite: false,
    },
  };
}