import React, {useEffect} from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
const Allquotes = () => {
    const {sendRequest, status, error, data} = useHttp(getAllQuotes, true);
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    if(status === 'pending') return <div className='centered'><LoadingSpinner/></div>
    if(error) return <p className='centered focused'>{error}</p>
    if(status ===  'completed' && (!data || data.length === 0)) return <NoQuotesFound/>
    return (
        <>
        <QuoteList quotes={data}></QuoteList>
        </>
    );
}

export default Allquotes;
