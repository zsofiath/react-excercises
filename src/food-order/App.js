import React from 'react'
import Header from './components/Layouts/Header';
import Meals from './components/Meal/Meals';
import './index.css';

export default function App() {
    return (
        <>
            <Header/>
            <main>
                <Meals/>
            </main>
        </>
    )
}
