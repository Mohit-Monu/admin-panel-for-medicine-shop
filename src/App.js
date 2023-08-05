import "./App.css";
import AddMedicine from "./components/AddMedicine/AddMedicine";
import ShowMedicine from "./components/ShowMedicine/ShowMedicine";
import Header from "./components/header/Header";
import React, { Fragment, useState } from "react";

function App() {
  const [Medicines,setMedicines]=useState([
    {
      id:9562346512,
      name:"Avil",
      description:"Used to treat",
      price:44,
    },{
      id:956236512,
      name:"Avdfil",
      description:"Used to treat AV",
      price:5,
    },{
      id:962346512,
      name:"Avilsd",
      description:"Used to treat ARR",
      price:45,
    }
  ])
  console.log(Medicines)
  const [cart,setCart]=useState([
    {
      id:9562346512,
      name:"Avil",
      quantity:"123",
      price:"44",
    },{
      id:956236512,
      name:"Avdfil",
      description:"Used to treat AV",
      price:"5",
    },{
      id:962346512,
      name:"Avilsd",
      description:"Used to treat ARR",
      price:"45",
    }
  ])
  console.log(Medicines)

  function AddAMedicineHandler(medicine){
    setMedicines((prevMedicine)=>{
      return([medicine,...prevMedicine])
    })
  }
  function AddMedicineCartHandler(){
    // setCart()
  }
  return (
    <Fragment>
      <Header medicineLength={cart.length}></Header>
      <AddMedicine OnMedicineAdd={AddAMedicineHandler}></AddMedicine>
      <ShowMedicine OnCartAdd={AddMedicineCartHandler} medicines={Medicines}></ShowMedicine>
    </Fragment>
  );
}

export default App;
