import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";
import CarValue from "./CarValue";

const memorizedCars2 = createSelector(
  [(state) => state.cars.collection, (state) => state.cars.searchTerm],
  (collection, searchTerm) =>
    collection.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(memorizedCars2);
  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div className={`panel ${bold && 'bold'}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
      <CarValue />
    </div>
  );
}

export default CarList;
