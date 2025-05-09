import { useDispatch, useSelector } from "react-redux";
import { removeCar } from '../store'
function CarList() {
    const dispatch = useDispatch()
  const cars = useSelector((state) => {
    return state.cars.collection;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  }
  const renderedCars = cars.map((car) => {
    return (
      <div className="panel" key={car.id}>
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
  return <div className="car-list">
    {renderedCars}
    <hr />

  </div>
}

export default CarList;
