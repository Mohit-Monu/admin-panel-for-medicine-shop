import "./App.css";
import AddMedicine from "./components/AddMedicine/AddMedicine";
import Cart from "./components/Cart/Cart";
import ShowMedicine from "./components/ShowMedicine/ShowMedicine";
import Header from "./components/header/Header";
import React, { Fragment, useState } from "react";

function App() {
  const [Medicines,setMedicines]=useState([])
  const [cart,setCart]=useState([])
  function AddAMedicineHandler(medicine){
    setMedicines((prevMedicine)=>{
      return([medicine,...prevMedicine])
    })
  }
  function AddMedicineCartHandler(product){
    let count=0
    const cartitem=cart.map((item)=>{
      if(item.id===product.id){
        item.quantity=item.quantity+product.quantity
        count++
        return(item)
      }else{
        return(item)
      }
    })
    if(count===0){
      setCart((prevCart)=>{
        return([product,...prevCart])
      })
    }else{
      setCart(cartitem)
    }

  }
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  function removeItemcarthandler(id){
    const cartitem=cart.filter((item)=>{
      if(item.id===id){
        if(item.quantity===1){
        }else{
          item.quantity--
          return(item)
        }
        
      }else{
        return(item)
      }
    })
    setCart(cartitem)
  }
  function addItemcarthandler(id){
    const cartitem=cart.map((item)=>{
      if(item.id===id){
        item.quantity++
        return(item)
      }else{
        return(item)
      }
    })
    setCart(cartitem)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} medicines={cart} removeItemcart={removeItemcarthandler} addItemcart={addItemcarthandler}></Cart>}
      <Header medicineLength={cart.length} onShowCart={showCartHandler}></Header>
      <AddMedicine OnMedicineAdd={AddAMedicineHandler}></AddMedicine>
      <ShowMedicine OnCartAdd={AddMedicineCartHandler} medicines={Medicines}></ShowMedicine>
    </Fragment>
  );
}

export default App;
