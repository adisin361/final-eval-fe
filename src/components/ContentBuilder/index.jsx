import React from 'react';
import './style.css';
import magIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
const ContentBuilder = () => {
  return (
    <>
      <div className='content-builder'>
        <div className='cb-header'>
          <p>CMS+</p>
        </div>
        <div className='cb-body'>
          <div className='cb-collection-types'>
            <p>COLLECTION TYPES</p>
            <img src={magIcon} />
          </div>

          <ul className='collection-list'>
            <li>Company_Profile</li>
            <li>idv_functionals</li>
          </ul>

          <div className='content-type-builder'>
            <p>CONTENT TYPE BUILDER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBuilder;