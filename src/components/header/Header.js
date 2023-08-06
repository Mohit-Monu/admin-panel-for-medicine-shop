import classes from "./Header.module.css";
import Button from "../UI/Button"
function Header(props) {
  function CartView() {
    props.onShowCart()
  }
  return (
    <div className={classes.header}>
      <h2 className={classes.h2}>Admin Medicine Panel</h2>
      <div className={classes.cartdiv}>
        <h3 className={classes.qty} >{props.medicineLength}</h3>
        <Button onClick={CartView}>My Cart</Button>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
export default Header;
