import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Calculator.css';

// Define the Button component with PropTypes validation and defaultProps
const Button = ({ value, className }) => (
  <button type="button" className={className}>{value}</button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '', // Provide a default value for className
};

// Define the Calculator component
const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="button-grid">
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="+" className="operator" />
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="x" className="operator" />
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" className="operator" />
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" className="operator" />
      <Button value="0" className="zero" />
      <Button value="." />
      <Button value="=" className="operator" />
    </div>
  </div>
);

export default Calculator;
