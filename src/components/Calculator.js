import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

    handleClick = (e) => {
      const { innerText } = e.target;
      const { total, next, operation } = this.state;
      const newTotal = calculate({ total, next, operation }, innerText);
      this.setState({
        total: newTotal.total,
        next: newTotal.next,
        operation: newTotal.operation,
      });
    };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) this.handleClick();
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-display">
          <div
            role="button"
            className="calculator-display-value"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            {next || total || '0'}
          </div>
          <div className="calculator-display-operation" />
        </div>
        <div className="calculator-keypad">
          <div
            className="calculator-keypad-key AC"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            AC
          </div>
          <div
            className="calculator-keypad-key"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            +/-
          </div>
          <div
            className="calculator-keypad-key modulo"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            %
          </div>
          <div
            className="calculator-keypad-key divide"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            &#247;
          </div>

          <div
            className="calculator-keypad-key 7"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            7
          </div>
          <div
            className="calculator-keypad-key 8"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            8
          </div>
          <div
            className="calculator-keypad-key 9"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            9
          </div>
          <div
            className="calculator-keypad-key multiply"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            x
          </div>

          <div
            className="calculator-keypad-key 4"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            4
          </div>
          <div
            className="calculator-keypad-key 5"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            5
          </div>
          <div
            className="calculator-keypad-key 6"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            6
          </div>
          <div
            className="calculator-keypad-key subtract"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            -
          </div>

          <div
            className="calculator-keypad-key 1"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            1
          </div>
          <div
            className="calculator-keypad-key 2"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            2
          </div>
          <div
            className="calculator-keypad-key 3"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            3
          </div>
          <div
            className="calculator-keypad-key add"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            +
          </div>

          <div
            className="calculator-keypad-key zero"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            0
          </div>
          <div
            className="calculator-keypad-key decimal-pt"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            .
          </div>
          <div
            className="calculator-keypad-key equals"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            tabIndex="0"
          >
            =
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
