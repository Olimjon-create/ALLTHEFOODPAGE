import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Food from "./components/Food";
import "./App.css";
import FoodNavbar from "./components/FoodNavbar";
import FoodCard from "./components/FoodCard";

function App() {
  return (
    <>
      <Food />
      <FoodNavbar />
      <FoodCard />
    </>
  );
}

export default App;
