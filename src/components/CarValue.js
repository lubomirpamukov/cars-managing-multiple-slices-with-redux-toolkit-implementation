import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const selectTotalCost = createSelector(
  [(state) => state.cars.collection, (state) => state.cars.searchTerm],
  (collection, searchTerm) =>
    collection
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
);

const carCount = createSelector(
  [(state) => state.cars.collection],
  (collection) => collection.length
);

function CarValue() {
  const totalCost = useSelector(selectTotalCost);
  const totalCount = useSelector(carCount);

  return (
    <>
      <div className="car-value">Total Cost: ${totalCost}</div>
      <div className="car-value">Total Count: {totalCount}</div>
    </>
  );
}

export default CarValue;
