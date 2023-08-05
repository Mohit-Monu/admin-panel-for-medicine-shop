import classes from "./Header.module.css";
import Button from "../UI/Button"
function Header(props) {
  function CartView() {
    console.log("clicked")
  }
  return (
    <div className={classes.header}>
      <h2 className={classes.h2}>Admin Medicine Panel</h2>
      <div className={classes.cartdiv}>
        <h1>{props.medicineLength}</h1>
        <Button onClick={CartView}>My Cart</Button>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
export default Header;
