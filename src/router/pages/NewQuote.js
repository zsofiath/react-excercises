import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = (quote) => {
        console.log(quote);
    }

    return (
        <div>
            <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
        </div>
    );
}

export default NewQuote;
