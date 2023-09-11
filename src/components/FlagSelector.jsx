import React, { useState, useEffect } from 'react';
import './flag.css';

const FlagSelector = ({ onSelectCountryCode }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [countries, setCountries] = useState([]);
  const [codeValue, setCodeValue] = useState('+1');
  const [open, setOpen] = useState(false)
  const [codeFlag, setCodeFlag] = useState('https://flagcdn.com/w320/us.png')

  const onCountryClicked = (code, flag)=>{
    setCodeValue(code)
    setCodeFlag(flag)
    setOpen(false)
  }

  const onOpen = ()=>{
    setOpen(!open)
  }


  useEffect(() => {
    
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        
        const sortedCountries = data.sort((a, b) => {
          const nameA = a.name.common.toLowerCase();
          const nameB = b.name.common.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        
        setCountries(sortedCountries);
      })
      .catch((error) => console.error(error))

    


  }, []);

  
  const handleCountrySelect = (e) => {
    setSelectedCountryCode(e.target.value);
    onSelectCountryCode(e.target.value);
  };

 

  return (
    <div>
      <label htmlFor="countryCode">Phone Number:</label>
      <div className="select">
        <div className="country" onClick={onOpen} >
           <img  src={codeFlag} alt={``}/> {codeValue} 
        </div>
        {
            open && <div className="content">
            {countries.map((country, index) => (
                 <div className="countryCodes" key={index} onClick={()=>{
                    onCountryClicked(country.idd?.root + country.idd?.suffixes?.[0] || '', country.flags?.png)
                 }}>
                    <img  src={country.flags?.png} alt={`Flag of ${country.name.common}`}/>
                    {country.name.common}
                 </div>
            ))}
            </div>
        }
      </div>

    </div>
  );
};

export default FlagSelector;
