import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const Mainnavigation = () => {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>Great quotes</div>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink className={(navData)=> navData.isActive ? classes.active : ''} to="/quotes">All quotes</NavLink></li>
                        <li><NavLink className={(navData)=> navData.isActive ? classes.active : ''} to="/new-quote">New quote</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Mainnavigation;
