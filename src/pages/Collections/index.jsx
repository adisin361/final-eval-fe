import React from 'react';
import { ContentBuilder, ContentTypeHeader } from '../../components';
import CollectionTypeContainer from '../../components/CollectionTypeContainer';
import './style.css';
const CollectionsPage = () => {
  return (
    <>
      <div className='collections-div'>
        <ContentBuilder />
        <div className='collections-div-2'>
          <ContentTypeHeader />
          <CollectionTypeContainer />
        </div>
      </div>
    </>
  );
};

export default CollectionsPage;