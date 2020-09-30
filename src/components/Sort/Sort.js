import React from 'react';

function Sort(props) {

    const sortByPopulation = (event) => {
        event.preventDefault();
        if (props.sortCountry) {
          props.sortCountry();
        }
      };

    return (
        <button id="button1" onClick={sortByPopulation}>Sort by Population</button>
      );
  }
  
  export default Sort;