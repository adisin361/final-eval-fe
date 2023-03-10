import React from 'react';
import './style.css';
import magIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
import { makeRequest } from '../../utils/makeRequest';
import { GET_COLLECTION_DETAILS } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ContentBuilder = () => {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_COLLECTION_DETAILS, navigate).then((response) => {
      setCollections(response.data);
    });
  }, []);

  return (
    <>
      <div className='content-builder'>
        <div className='cb-header' onClick={() => {
          navigate('/dashboard');
        }}>
          <p >CMS+</p>
        </div>
        <div className='cb-body'>
          <div className='cb-collection-types'>
            <p>COLLECTION TYPES</p>
            <img src={magIcon} />
          </div>

          <ul className='collection-list'>
            {collections?.map((collection) => (
              <li key={collection.id} onClick={() => {
                navigate('/dashboard/collections');
              }}>{collection.name}</li>
            ))}
          </ul>

          <div className='content-type-builder'>
            <p onClick={() => {
              navigate('/dashboard');
            }}>CONTENT TYPE BUILDER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBuilder;