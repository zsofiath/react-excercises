import React, {useContext} from 'react';
import Modal from '../UI-elements/Modal';
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-context";
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id)=> {}
    const cartItemAddHandler = (item)=> {
        cartCtx.addItem(item);
    }


    const cartItems = cartCtx.items.map(item => <CartItem key={item.id} 
        price={item.price}
        name={item.name}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
    />);
    const hasItems = cartCtx.items.length > 0;
    return (
        <Modal onClickBackdrop={props.onClose}>
        <div className={classes['cart-items']}>
            {cartItems}
            <div className={classes.total}>
                <span >Total amount:</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}
            >
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </div>
        </Modal>
    );
}

export default Cart;
