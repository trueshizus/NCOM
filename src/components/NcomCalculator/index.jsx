import React, { useState } from "react";

function NcomCalculator() {
  const [operation, setOperation] = useState("");

  return (
    <div>
      <input type="text" onChange={e => setOperation(e.target.value)} />
      <span>={operation}</span>
    </div>
  );
}

export default NcomCalculator;
