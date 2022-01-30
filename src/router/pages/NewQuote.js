import React, {useEffect} from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import {useNavigate} from "react-router-dom";
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const navigate = useNavigate();


    useEffect(() => {
        if(status === 'completed') {
            navigate('/quotes', {replace: true}); //navigate(-1), navigate(1) <- back and forth
        }
    }, [status, navigate]);

    const addQuoteHandler = (quote) => {
        sendRequest(quote);
    }

    return (
        <div>
            <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
        </div>
    );
}

export default NewQuote;
