import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
    {id: 'id1', author: 'dsxc', text: '1....'},
    {id: 'id2', author: 'dsxc', text: '2....'},
    {id: 'id3', author: 'dsxc', text: '3....'},
    {id: 'id4', author: 'dsxc', text: '4....'},
    {id: 'id5', author: 'dsxc', text: '5....'},
];
const Allquotes = () => {
    return (
        <>
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
        </>
    );
}

export default Allquotes;
