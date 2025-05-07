import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      //action.payload === searchTerm
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //action.payload = { name: Toyota auris, cost: 5000}
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      //action.payload === car id
      return state.filter((car) => {
        car.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
