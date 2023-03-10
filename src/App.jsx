import './App.css';
import React from 'react';
import { LoginPage, RegisterPage, Dashboard, Collection } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_ROUTE, DASHBOARD_ROUTE, COLLECTIONS_ROUTE, COLLECTION_ROUTE } from './constants/routes';
import CollectionsPage from './pages/Collections';
import { PageNotFound } from './components';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
          <Route path={COLLECTIONS_ROUTE} element={<CollectionsPage />} />
          <Route path={COLLECTION_ROUTE} element={<Collection />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
