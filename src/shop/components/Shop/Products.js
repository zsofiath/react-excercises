import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const itemList = [
    { id: 1, title: "name 1", price: 2, description: "Lorem ipsum" },
    { id: 2, title: "name 2", price: 6, description: "Lorem ipsum" },
    { id: 3, title: "name 3", price: 3, description: "Lorem ipsum" },
    { id: 4, title: "name 4", price: 77, description: "Lorem ipsum" },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemList.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
