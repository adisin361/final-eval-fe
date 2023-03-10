import React from 'react';
import './style.css';
import editIcon from '../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
// eslint-disable-next-line react/prop-types
const EntriesChip = ({ data }) => {
  return (
    <>
      <div className='entries-chip'>
        {/* <p className='h-1'>1</p>
        <p className='h-2'>Name</p>
        <p className='h-3'>Text</p>
        <p className='h-4'>Text</p> */}
        {Object.values(data).map((x, index) => {
          return (
            <div className="id-entry" key={index}>
              {x}
            </div>
          );
        })}

        <div className='icons-div'>
          <img src={editIcon}></img>
          <img src={binIcon}></img>
        </div>
      </div>
    </>
  );
};

export default EntriesChip;