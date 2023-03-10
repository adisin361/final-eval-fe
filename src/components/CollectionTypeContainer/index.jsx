import React from 'react';
import EntriesChip from '../EntriesChip';
import SideModal from '../SideModal';
import './style.css';
import { useState, useEffect } from 'react';
import { makeRequest } from '../../utils/makeRequest';
import { GET_COLLECTION_DATA } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
const CollectionTypeContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    makeRequest(GET_COLLECTION_DATA, navigate, {
      data: { collection_id: 1 },
    }).then((response) => {
      console.log(response.data);
      setCollections(response.data);
      setColumns(Object.keys(response.data[0].values));
    });
  }, []);
  return (
    <div className="collection-type-container">
      <div className='collection-type-header'>
        <p className='entries-count-text'>13 Entries Found</p>
        <p className='new-entry-text' onClick={() => setIsOpen(true)}>Add a new entry</p>
      </div>
      <div className='entries-list'>
        <div className='entries-list-heading'>
          {columns.map((col, index) => (
            <div className="id-entry" key={index}>
              {col}
            </div>
          ))}

          <p className='action-items'>Actions</p>

        </div>
        {collections?.map((data, index) => {
          return collections.length !== 0 ? (
            <EntriesChip cols={columns} key={index} data={data.values} />
          ) : (
            <></>
          );
        })}
      </div>

      {isOpen && <SideModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default CollectionTypeContainer;