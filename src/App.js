import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Amenities from "./components/amenities/amenities";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Amenities/>
    </div>
  );
}

export default App;
