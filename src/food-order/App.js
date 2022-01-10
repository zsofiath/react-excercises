import React from "react";
import Cart from "./components/Chart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meal/Meals";
import "./index.css";
import CartProvider from "./store/Cart-provider";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
