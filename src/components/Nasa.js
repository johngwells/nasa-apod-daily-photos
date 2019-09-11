import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NasaList from './NasaList';

function Nasa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=RvkEnkyfMa9Kyeuint7mdZ9et95NSW4eQpCbQpbX')
    .then(response => {
      // console.log(response.nasaData);
      setData(response.data);
    })
    .catch(error => {
      console.log('Data was not returned', error)
    });
  }, []);

  return (
    <div>
      <h1>NASA's Astronomy Picture of the Day!</h1>
      <NasaList nasaData={data} />
    </div>
  );
}

export default Nasa;
