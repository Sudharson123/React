import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
const name = "Sudharson";
ReactDom.render(
  <div>
    <h1>My name is {name}</h1>
    <h1 className="head">My favourite foods are</h1>
    <ul>
      <li>Bacon</li>
      <li>jamon</li>
      <li>noodles</li>
    </ul>
    <div className="img">
      <img src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" />
      <img src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" />
    </div>
  </div>,
  document.getElementById("root")
);
