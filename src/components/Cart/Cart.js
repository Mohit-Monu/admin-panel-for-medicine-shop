import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const cartItemRemoveHandler = (id) => {
    props.removeItemcart(id.target.value);
  };

  const cartItemAddHandler = (id) => {
    props.addItemcart(id.target.value);
  };
  const [totalamount, setTotalAmount] = useState(0);
  useEffect(() => {
    let totalsum = 0;
    props.medicines.forEach((element) => {
      totalsum += element.price * element.quantity;
    });
    setTotalAmount(totalsum);
  }, [props.medicines]);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {props.medicines.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onRemove={cartItemRemoveHandler}
            onAdd={cartItemAddHandler}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{totalamount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {props.medicines.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
