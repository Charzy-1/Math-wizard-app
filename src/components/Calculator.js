// src/components/Calculator.js
import React from 'react';
import './Calculator.css';

const Button = ({ value, className }) => (
  <button className={className}>{value}</button>
);

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
