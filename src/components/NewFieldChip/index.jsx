/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import editIcon from '../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
const NewFieldChip = ({ col, deleteFieldHandler }) => {
  return (
    <div className="new-field-chip">
      <div className='field-type-text'>
        <p>Ab</p>
      </div>
      <p className='field-name-text'>{col}</p>
      <p className='field-type-text-2'>Text</p>
      <div className='action-buttons-div'>
        <img src={editIcon}></img>
        <img src={deleteIcon} onClick={() => {
          deleteFieldHandler(col);
        }}></img>
      </div>
    </div>
  );
};

export default NewFieldChip;