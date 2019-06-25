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
            return sliceOfState.concat(action.payload);
        case MARK_FAVOURITE:
            return sliceOfState.map(quote => {
                if (quote.id === action.payload) {
                    return {
                        ...quote,
                        favourite: !quote.favourite
                    };
                }
                return quote;
            })
        default:
            return sliceOfState;
    }
}

// quoteOfTheDayReducer
export function quoteOfTheDayReducer(sliceOfState = null, action) {
    switch (action.type) {
        case MARK_QUOTE_OF_THE_DAY:
            return action.payload;
        case DELETE_QUOTE:
            if (action.payload === sliceOfState) {
                return null;
            }
            return sliceOfState;
        default:
            return sliceOfState;
    }

}