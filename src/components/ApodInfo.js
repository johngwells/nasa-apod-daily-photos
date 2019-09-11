import React from 'react';

function ApodInfo(props) {
  return (
    <div>
      <img src={props.apod.hdurl} alt='nasa space'/>
    </div>
  );
}

export default ApodInfo;