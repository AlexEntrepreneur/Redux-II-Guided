import React from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/actionCreators';

const QuoteForm = (props) => {
  const onAddQuote = (event) => {
    const authorInput = event.target['author'];
    const quoteInput = event.target['quote']
    event.preventDefault();

    // Use addQuote Function Here
    authorInput.value
    && quoteInput.value
    && props.addQuote(
      authorInput.value,
      quoteInput.value,
    );

    authorInput.value = '';
    quoteInput.value = '';
  }

  return (
    <div>
      <form onSubmit={onAddQuote} className="quote-form">
        <input name="author" placeholder="Author" />
        <input name="quote" placeholder="Quote" />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  );
}

export default connect(
  null, 
  { addQuote }
)(QuoteForm);