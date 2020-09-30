import React from 'react';

function Countries(props) {

    const { countries } = props;

    const onCountryChange = (event) => {
        event.preventDefault();
        const val = event.currentTarget.value;
        if (props.countryChange) {
          props.countryChange(val);
        }
    }

    return (
        <div className="country-select">
          <label>Choose Country: </label>
          <select onChange={onCountryChange}>
            <option value="All">All</option>
            {countries &&
              countries.map(country => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
          </select>
        </div>
      );
  }
  
  export default Countries;