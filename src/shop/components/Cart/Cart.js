import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const isChartVisible = useSelector((state) => state.UI.isChartVisible);
  const cartItemList = useSelector((state) => state.Cart.items);
  if (!isChartVisible) return <></>;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItemList.length === 0 ? (
        <p>You cart is empty</p>
      ) : (
        <ul>
          {cartItemList.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.total,
                price: item.price,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
