import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import {useHistory} from "react-router-dom";

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quote) => {
        console.log(quote);
        //history.replace('/quotes'); //cannot navigate back
        history.push('/quotes'); //can navgate back
    }

    return (
        <div>
            <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
        </div>
    );
}

export default NewQuote;
