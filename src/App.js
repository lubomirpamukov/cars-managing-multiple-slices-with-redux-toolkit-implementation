import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
    return (
        <div className="container is-fluid">
            <CarForm />
            <CarSearch />
            <CarList />
        </div>
    )
}

export default App;
