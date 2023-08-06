import classes from "./ShowDetailForm.module.css";
import Button from "./Button";
import { useRef } from "react";
function Input(props) {
  const quantity = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const obj = {
      id:e.target.value,
      name: e.target.parentNode.parentNode.children[0].innerHTML ,
      quantity: +quantity.current.value,
      price: +e.target.parentNode.parentNode.children[2].innerHTML.substring(3)
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
