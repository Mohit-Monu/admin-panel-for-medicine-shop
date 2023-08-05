import classes from "./AddMedicine.module.css";
import Button from "../UI/Button";
import { useState } from "react";
function AddMedicine(props) {
  const [MedicineName,setMedicineName] = useState()
  const [MedicineDescription,setMedicineDescription] = useState()
  const [MedicinePrice,setMedicinePrice] = useState()

  function MedicineNameHandler(e){
    setMedicineName(e.target.value)
  }
  function MedicineDescriptionHandler(e){
    setMedicineDescription(e.target.value)
  }
  function MedicinePriceHandler(e){
    setMedicinePrice(e.target.value)
  }
  function AddMedicine(e){
    e.preventDefault()
    const obj={
      id:Date.now(),
      name:MedicineName,
      description:MedicineDescription,
      price:MedicinePrice
    }
    props.OnMedicineAdd(obj)
    setMedicineDescription("")
  }
  return (
    <form className={classes.AddMedicine} onSubmit={AddMedicine}>
      <h2>Medicine Name</h2>
      <input onChange={MedicineNameHandler} type="text" required/>
      <h2> Description</h2>
      <input onChange={MedicineDescriptionHandler} type="text" required/>
      <h2> Price</h2>
      <input onChange={MedicinePriceHandler} type="number" required/>
      <br></br>
      <br></br>
      <Button>Add Medicine</Button>
    </form>
  );
}
export default AddMedicine;
