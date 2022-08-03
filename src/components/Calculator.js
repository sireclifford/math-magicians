import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          <div className="calculator-display-value">0</div>
          <div className="calculator-display-operation"> </div>
        </div>
        <div className="calculator-keypad">
          <div className="calculator-keypad-key AC">AC</div>
          <div className="calculator-keypad-key">+/-</div>
          <div className="calculator-keypad-key modulo">%</div>
          <div className="calculator-keypad-key divide">&#247;</div>

          <div className="calculator-keypad-key 7">7</div>
          <div className="calculator-keypad-key 8">8</div>
          <div className="calculator-keypad-key 9">9</div>
          <div className="calculator-keypad-key multiply">x</div>

          <div className="calculator-keypad-key 4">4</div>
          <div className="calculator-keypad-key 5">5</div>
          <div className="calculator-keypad-key 6">6</div>
          <div className="calculator-keypad-key subtract">-</div>

          <div className="calculator-keypad-key 1">1</div>
          <div className="calculator-keypad-key 2">2</div>
          <div className="calculator-keypad-key 3">3</div>
          <div className="calculator-keypad-key add">+</div>

          <div className="calculator-keypad-key zero">0</div>
          <div className="calculator-keypad-key decimal-pt">.</div>
          <div className="calculator-keypad-key equals">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
