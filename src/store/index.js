import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";


const store = configureStore({
  reducer: {
    cars: carsReducer,
    forms: formReducer
  }
});

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };