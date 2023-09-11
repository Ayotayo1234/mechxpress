// src/components/PhoneNumberInput.js
import { useEffect } from "react";
import "./flag.css"
import React, { useState } from 'react';

const PhoneNumberInput = ({ selectedCountryCode }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    // Fetch the list of countries from the API when the component mounts
    fetch('https://restcountries.com/v3.1/name/nigeria')
      .then((response) => response.json())
      .then((data) => {
        
       console.log(data)
       
      })
      .catch((error) => console.error(error))

    


  }, []);

  

  

  return (
    <div>
      <input className="input"
        type="number"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={`12345...`}
      />
    </div>
  );
};

export default PhoneNumberInput;
