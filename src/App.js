import React from 'react';
import ENSContainer from './components/ENSContainer';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Logout from './components/logout';
import Dashboard from './pages/dashboard';
import Main from './pages/main';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ens" element={<ENSContainer />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
