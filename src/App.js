import React, { useState } from "react";

export default function App() {
  var [numerator, setNumerator] = useState("");
  var [denominator, setDenominator] = useState("");
  var [executionOutput, setExecutionOutput] = useState("");
  var [hasError, setHasError] = useState(false);

  function getDivision() {
    try {
      if (denominator === "0") {
        throw Error("Division By 0");
      }
      setExecutionOutput(numerator / denominator);
    } catch {
      setHasError(true);
    }
  }

  function updateValue(event) {
    if (event.target.id === "numerator") {
      setNumerator(event.target.value);
    } else {
      setDenominator(event.target.value);
    }
  }

  return (
    <div>
      {!hasError && (
        <section className="App">
          <div>
            <label>First Value:{" "}</label>
            <input id="numerator" type="text" value={numerator} onChange={updateValue} />
          </div>
          <div>
            <label>Second Value:{" "}</label>
            <input id="denominator" type="text" value={denominator} onChange={updateValue} />
          </div>
          <div>Output: {executionOutput}</div>
          <input type="button" onClick={getDivision} value="Divide Values" />
        </section>
      )}

      {hasError && <ErrorComponent></ErrorComponent>}
    </div>
  );
}

function ErrorComponent() {
  return <h1>Division by 0 Error</h1>
}
