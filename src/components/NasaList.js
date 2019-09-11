import React from 'react';

// import Apodinfo from './ApodInfo';

function NasaList({nasaData}) {
  console.log('Nasa List props', nasaData);
  return (
    <div className='nasalist'>
    <img src={nasaData.hdurl} alt='nasa space'/>
    <h1>{nasaData.title}</h1>
    <h3>{nasaData.copyright}</h3>
    <h3>{nasaData.date}</h3>
    <p>{nasaData.explanation}</p>
    </div>
  );
}

export default NasaList;