import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    collection: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      //action.payload === searchTerm
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //action.payload = { name: Toyota auris, cost: 5000}
      state.collection.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      //action.payload === car id
      const updatedCollection = state.collection.filter ((car) => {
        return car.id !== action.payload
      })
      state.collection = updatedCollection;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
