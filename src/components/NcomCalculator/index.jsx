import React, { useState } from "react";
import ComplexNumber from "./components/ComplexNumber";

function NcomCalculator() {
  const initialNumbers = [ComplexNumber, ComplexNumber];

  const [numbers] = useState(initialNumbers);

  return <div>{numbers.map(number => number())}</div>;
}

export default NcomCalculator;
