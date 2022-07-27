
import ENSContainer from './components/ENSContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
