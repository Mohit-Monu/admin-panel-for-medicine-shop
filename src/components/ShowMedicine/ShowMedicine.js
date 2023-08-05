import classes from "./ShowMedicine.module.css";
import React from "react";
import ShowDetailForm from "../UI/ShowDetailForm";
function ShowMedicine(props) {
  function AddToCartHandler(product) {
    props.OnCartAdd(product);
  }
  const listofmedicine = props.medicines.map((item) => (
    <tr key={item.id}>
      <ShowDetailForm item={item} onSubmit={AddToCartHandler}></ShowDetailForm>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th className={classes.Description}>Description</th>
          <th>Price</th>
          <th className={classes.Quantity}>Quantity</th>
          <th className={classes.Action}>Action</th>
        </tr>
      </thead>
      <tbody>{listofmedicine}</tbody>
    </table>
  );
}
export default ShowMedicine;
