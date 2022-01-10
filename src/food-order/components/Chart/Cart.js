import React from 'react';
import Modal from '../UI-elements/Modal';
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = [{id:'c1', name: 'huihiu', amount:2, price:2}].map(item => <div key={item.id}>{item.name}</div>);
    return (
        <Modal onClickBackdrop={props.onClose}>
        <div className={classes['cart-items']}>
            {cartItems}
            <div className={classes.total}>
                <span >Total amount:</span>
                <span>123</span>
            </div>
            <div className={classes.actions}
            >
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
        </Modal>
    );
}

export default Cart;
