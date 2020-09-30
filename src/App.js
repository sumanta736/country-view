import React, { useState, useEffect } from 'react';
import Table from './components/Table/Table';
import './App.css';

function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(response => setApiData(response));
  }, []);


  return (
    <div className="App">
      <Table response={apiData} />
    </div>
  );
}

export default App;
