import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
    {id: 'id1', author: 'dsxc', text: '....'},
    {id: 'id2', author: 'dsxc', text: '....'},
    {id: 'id3', author: 'dsxc', text: '....'},
    {id: 'id4', author: 'dsxc', text: '....'},
    {id: 'id5', author: 'dsxc', text: '....'},
];
const Allquotes = () => {
    return (
        <>
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
        </>
    );
}

export default Allquotes;
