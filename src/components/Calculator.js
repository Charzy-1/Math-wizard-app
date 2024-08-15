import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

const Button = ({ value, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired, // Validate 'value' prop
  className: PropTypes.string, // Validate 'className' prop
  onClick: PropTypes.func, // Validate 'onClick' prop
};

Button.defaultProps = {
  className: '',
  onClick: () => {}, // Provide a default empty function
};

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    setCalculatorState(newState);
  };

  return (
    <div className="calculator">
      <div className="display">
        {calculatorState.next || calculatorState.total || '0'}
      </div>
      <div className="button-grid">
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
  );
};

export default Calculator;
