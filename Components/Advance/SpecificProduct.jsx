import React from 'react'
import Header from './Header';

const SpecificProduct = (props) => {
  return (
    <>
      <Header />
      <h1>{props.name}</h1>
    </>
  );
}

export default SpecificProduct