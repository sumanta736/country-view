import React from 'react';

function Filter(props) {

      return (
        <React.Fragment>
          <input
            type={props.type}
            value={props.nameVal}
            onChange={props.nameValChange}
            placeholder={props.placeholder}
          />
          <button id="button2" onClick={props.filterSubmit}>{props.filterBtnText}</button>
        </React.Fragment>
      );
  }
  
  export default Filter;