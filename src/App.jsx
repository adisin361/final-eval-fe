import './App.css';
import React from 'react';
import { LoginPage, RegisterPage, Dashboard } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_ROUTE, DASHBOARD_ROUTE } from './constants/routes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
