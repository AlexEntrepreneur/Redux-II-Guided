import React from 'react';
// import { connect } from 'react-redux';
import Quote from './Quote';

export class Quotes extends React.Component {
  // state = {
  //   quotes: [],
  //   quoteOfTheDay: null
  // }
  render() {
    return (
      <div>
        <h1>My Favorite Quotes</h1>
        <div>
          {
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
                markFavourite={this.props.markFavourite}
                deleteQuote={this.props.deleteQuote}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Quotes;