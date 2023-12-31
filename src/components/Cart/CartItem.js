import classes from './CartItem.module.css';

const CartItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>Rs.{props.price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove} value={props.id}>−</button>
        <button onClick={props.onAdd} value={props.id}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
