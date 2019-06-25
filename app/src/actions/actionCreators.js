import uuid from 'uuid';
import {
    ADD_QUOTE,
    DELETE_QUOTE,
    MARK_QUOTE_OF_THE_DAY,
    MARK_FAVOURITE
} from './actionTypes';

export function addQuote(author, text) {
    return { 
        type: ADD_QUOTE,
        payload: {
            author,
            text,
            id: uuid(),
            favourite: false
        }
    };
}

export function deleteQuote(id) {
    return { 
        type: DELETE_QUOTE,
        payload: id
    };
}

export function markQuoteOfTheDay(id) {
    return { 
        type: MARK_QUOTE_OF_THE_DAY,
        payload: id 
    };
}

export function markFavourite(id) {
    return { 
        type: MARK_FAVOURITE,
        payload: id
    };
}