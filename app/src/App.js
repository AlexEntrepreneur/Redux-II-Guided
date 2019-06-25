import React from 'react';
import Quotes from './components/Quotes';
import QuoteForm from './components/QuoteForm';

function App() {
  return (
    <div className="App">
      <Quotes quotes={[]} />
      <QuoteForm />
    </div>
  );
}

export default App;
