import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
    return (
        <>
            <CarForm />
            <CarList />
            <CarSearch />
            <CarValue />
        </>
    )
}

export default App;
