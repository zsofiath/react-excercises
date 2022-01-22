import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const isChartVisible = useSelector((state) => state.isChartVisible);
  const cartItemList = useSelector((state) => state.cartItemList);
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
                title: item.name,
                quantity: item.amount,
                total: item.total,
                price: 11,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
