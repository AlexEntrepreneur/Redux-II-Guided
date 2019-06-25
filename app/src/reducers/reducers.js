import quotesData from '../quotesData';
import {
    ADD_QUOTE,
    DELETE_QUOTE,
    MARK_QUOTE_OF_THE_DAY,
    MARK_FAVOURITE
} from '../actions/actionTypes';

// quotesReducer
export function quotesReducer(sliceOfState = quotesData, action) {
    switch (action.type) {
        case DELETE_QUOTE:
            return sliceOfState.filter(quote => quote.id !== action.payload);
        case ADD_QUOTE:
            // Do stuff
        break;
        case MARK_FAVOURITE:
            // Do stuff
        break;
        default:
        // Do stuff
    }
}

// quoteOfTheDayReducer
export function quoteOfTheDayReducer(sliceOfState = null, action) {

}