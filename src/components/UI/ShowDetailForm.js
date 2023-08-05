import classes from "./ShowDetailForm.module.css";
import Button from "./Button";
import { useRef } from "react";
function Input(props) {
  const quantity = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const obj = {
      quantity: quantity.current.value,
      id:e.target.value
    };
    props.onSubmit(obj);
  }
  return (
    <>
      <td>{props.item.name}</td>
      <td>{props.item.description}</td>
      <td>Rs.{props.item.price}</td>
      <td>
        <input
          ref={quantity}
          className={classes.showinput}
          type="text"
          min="1"
          step="1"
          defaultValue="1"
        />
      </td>
      <td>
        <Button value={props.item.id} onClick={submitHandler} >Add to cart</Button>
      </td>
      </>
  );
}
export default Input;
