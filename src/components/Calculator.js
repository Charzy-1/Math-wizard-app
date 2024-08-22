import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

// Refactored Button component to use default parameters instead of defaultProps
const Button = ({ value, className = '', onClick = () => {} }) => (
  <button type="button" className={className} onClick={onClick}>
    {value}
  </button>
);

// Updated propTypes for Button component
Button.propTypes = {
  value: PropTypes.string.isRequired, // Validate 'value' prop
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  onClick: PropTypes.func, // eslint-disable-line react/require-default-props
};

const Calculator = () => {
  // Initial state for the calculator using the useState hook
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  // handleClick function to handle button clicks and update the calculator state
  const handleClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    setCalculatorState(newState);
  };

  return (
    <div className="calculator-container">
      {/* Added a paragraph above the calculator with a heading */}
      <p className="calculator-heading">Let&apos;s do some maths!💪</p>

      {/* Main calculator display and buttons */}
      <div className="calculator">
        <div className="display">
          {calculatorState.next || calculatorState.total || '0'}
        </div>
        <div className="button-grid">
          {/* Buttons with appropriate classNames and onClick handlers */}
          <Button value="AC" className="operator" onClick={() => handleClick('AC')} />
          <Button value="+/-" className="operator" onClick={() => handleClick('+/-')} />
          <Button value="%" className="operator" onClick={() => handleClick('%')} />
          <Button value="÷" className="operator" onClick={() => handleClick('÷')} />
          <Button value="7" onClick={() => handleClick('7')} />
          <Button value="8" onClick={() => handleClick('8')} />
          <Button value="9" onClick={() => handleClick('9')} />
          <Button value="x" className="operator" onClick={() => handleClick('x')} />
          <Button value="4" onClick={() => handleClick('4')} />
          <Button value="5" onClick={() => handleClick('5')} />
          <Button value="6" onClick={() => handleClick('6')} />
          <Button value="-" className="operator" onClick={() => handleClick('-')} />
          <Button value="1" onClick={() => handleClick('1')} />
          <Button value="2" onClick={() => handleClick('2')} />
          <Button value="3" onClick={() => handleClick('3')} />
          <Button value="+" className="operator" onClick={() => handleClick('+')} />
          <Button value="0" className="zero" onClick={() => handleClick('0')} />
          <Button value="." onClick={() => handleClick('.')} />
          <Button value="=" className="operator" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
