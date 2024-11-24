import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle calculation using a safer method (using Math functions)
  const calculateResult = () => {
    try {
      // Simple parsing with regex to handle numbers and basic operators
      let result = input.replace(/×/g, "*").replace(/÷/g, "/");
      result = Function("return " + result)(); // You could use more robust eval alternatives if needed

      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Handle clear button
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {/* Top row */}
        <button className="clear" onClick={clearInput}>
          AC
        </button>
        <button className="special" onClick={() => handleClick("+/-")}>
          +/-
        </button>
        <button className="special" onClick={() => handleClick("%")}>
          %
        </button>
        <button className="operator" onClick={() => handleClick("/")}>
          ÷
        </button>

        {/* Number and operator rows */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator" onClick={() => handleClick("*")}>
          ×
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator" onClick={() => handleClick("+")}>
          +
        </button>

        {/* Bottom row */}
        <button className="zero" onClick={() => handleClick("0")}>
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );

};

export default Calculator;
