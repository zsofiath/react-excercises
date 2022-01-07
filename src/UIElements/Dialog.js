import React from 'react';
import classes from './Dialog.module.css'

export default function Dialog(props) {
    return (
        <div className={classes.overlay}>
            <div className={classes.dialog}>
            {props.children}
            </div>
        </div>
    )
}
