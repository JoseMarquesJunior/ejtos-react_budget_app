import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ({ currency, handleCurrencyChange }) => {
    return (
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    );
  };

export default Currency