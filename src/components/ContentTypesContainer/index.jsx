import React from 'react';
import './style.css';
import magIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
import pencilIcon from '../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import NewTypeChip from '../NewTypeChip';
import NewFieldChip from '../NewFieldChip';
const ContentTypesContainer = () => {
  return (
    <div className="content-types-container">
      <div className='new-types-column'>
        <div className='new-types-header'>
          <p>7 Types</p>
          <img src={magIcon} />
        </div>

        <button className='new-type-button' >+ New Type</button>
        <div className='new-type-list'>
          <NewTypeChip />
        </div>
      </div>

      <div className='new-fields-column'>
        <div className='new-fields-heading'>
          <p>Company_Profile</p>
          <img src={pencilIcon} />
        </div>
        <p className='fields-text'>13 fields</p>
        <button className='field-button'>Add another field</button>
        <div className='fileds-list'>
          <NewFieldChip />
        </div>
      </div>
    </div>
  );
};

export default ContentTypesContainer;