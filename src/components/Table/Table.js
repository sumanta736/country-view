import React, { useState, useEffect } from 'react';
import Countries from '../Countries/Countries';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';



function Table(props) {
    const [apiArr, setApiArr] = useState([]);
    const [sortTyp, setSortType] = useState(false);
    const [nameVal, setNameVal] = useState('');

    useEffect(() => {
        if (props && props.response) {
            setApiArr(props.response);
        }
      }, [props]);
  

  const countryChange = (country) => {
    const showRelated =
    props.response &&
    props.response.filter((item) => {
        return item.name === country;
      });
    if (country === 'All') {
        setApiArr(props.response);
    } else {
        setApiArr(showRelated);
    }
  };

  const sortCountry = ()=> {
    let sortData;
    if (sortTyp) {
      sortData =
      apiArr &&
        [...apiArr].sort(
          (a, b) => b.population - a.population 
        );
    } else {
      sortData =
      apiArr &&
        [...apiArr].sort(
          (a, b) => a.population - b.population 
        );
    }
    setSortType(!sortTyp);
    setApiArr(sortData);
  };

  const nameValChange = (event) => {
    const val = event.currentTarget.value;
    setNameVal(val);
    console.log(val)
    if (val === '') {
        setApiArr(apiArr);
    }
  };

  const onFilter = (event) => {
    event.preventDefault();
    if (nameVal) {
      const filterData =
      props.response.filter((item) => {
          //return item.population >= Number(minVal) && item.population <= Number(maxVal);
          return item.name.toLowerCase().startsWith(nameVal.toLowerCase());
        });
        console.log(filterData)
        setApiArr(filterData);
    }
  };

    return (
      <div className="country-list">
        <Countries countryChange={countryChange} countries={props.response} />
        <div className="align-center">
          <Sort sortCountry={sortCountry} />
          <Filter
            type="text"
            filterSubmit={onFilter}
            nameVal={nameVal}
            nameValChange={nameValChange}
            filterBtnText="Filter by Name"
            placeholder="Type name here"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital</th>
              <th>Language</th>
              <th>Region</th>
              <th>Population</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {apiArr &&
              apiArr.map((item, index) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.capital}</td>
                  <td>{item.languages && item.languages[0].name}</td>
                  <td>{item.region}</td>
                  <td>{item.population}</td>
                  <td>{item.currencies && item.currencies[0].name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
}

export default Table;
