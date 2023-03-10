/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const NewTypeChip = ({ data, clickHandler, id, isActive }) => {
  return (
    <div className={`${isActive ? 'active-chip' : ''} new-type-chip`} onClick={() => clickHandler(id)}>
      <p>{data}</p>
      {/* <p>13</p> */}
    </div>
  );
};

export default NewTypeChip;