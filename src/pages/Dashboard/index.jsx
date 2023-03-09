import React from 'react';
import './style.css';
import { ContentBuilder, ContentTypeHeader, ContentTypesContainer } from '../../components';
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-page">
        <ContentBuilder />
        <div className='dashboard-container-section'>
          <ContentTypeHeader />
          <ContentTypesContainer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;