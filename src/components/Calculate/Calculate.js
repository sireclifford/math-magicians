import React, { useState } from 'react';
import './Calculate.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const { innerText } = buttonName.target;
    const newTotal = calculate(calculator, innerText);
    setCalculator(newTotal);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleClick();
  };

  return (
    <div className="calculate">
      <div className="calculator-display">
        <div
          role="button"
          className="calculator-display-value"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          {calculator.next || calculator.total || '0'}
        </div>
        <div className="calculator-display-operation" />
      </div>
      <div className="calculator-keypad">
        <div
          className="calculator-keypad-key AC"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          AC
        </div>
        <div
          className="calculator-keypad-key"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          +/-
        </div>
        <div
          className="calculator-keypad-key modulo"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          %
        </div>
        <div
          className="calculator-keypad-key divide"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          &#247;
        </div>

        <div
          className="calculator-keypad-key 7"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          7
        </div>
        <div
          className="calculator-keypad-key 8"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          8
        </div>
        <div
          className="calculator-keypad-key 9"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          9
        </div>
        <div
          className="calculator-keypad-key multiply"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          x
        </div>

        <div
          className="calculator-keypad-key 4"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          4
        </div>
        <div
          className="calculator-keypad-key 5"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          5
        </div>
        <div
          className="calculator-keypad-key 6"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          6
        </div>
        <div
          className="calculator-keypad-key subtract"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          -
        </div>

        <div
          className="calculator-keypad-key 1"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          1
        </div>
        <div
          className="calculator-keypad-key 2"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          2
        </div>
        <div
          className="calculator-keypad-key 3"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          3
        </div>
        <div
          className="calculator-keypad-key add"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          +
        </div>

        <div
          className="calculator-keypad-key zero"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          0
        </div>
        <div
          className="calculator-keypad-key decimal-pt"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          .
        </div>
        <div
          className="calculator-keypad-key equals"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
