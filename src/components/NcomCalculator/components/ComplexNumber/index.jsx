import React, { useState } from "react";

function ComplexNumber() {
  const [value, setValue] = useState("(a,b)");

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

export default ComplexNumber;
