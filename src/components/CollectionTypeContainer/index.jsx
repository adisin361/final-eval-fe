import React from 'react';
import EntriesChip from '../EntriesChip';
import './style.css';

const CollectionTypeContainer = () => {
  return (
    <div className="collection-type-container">
      <div className='collection-type-header'>
        <p className='entries-count-text'>13 Entries Found</p>
        <p className='new-entry-text'>Add a new entry</p>
      </div>
      <div className='entries-list'>
        <div className='entries-list-heading'>
          <p className='header-1'>ID</p>
          <p className='header-2'>Name</p>
          <p className='header-3'>Website</p>
          <p className='header-4'>Contact</p>
          <p className='action-items'>Actions</p>
        </div>
        <EntriesChip />
      </div>
    </div>
  );
};

export default CollectionTypeContainer;