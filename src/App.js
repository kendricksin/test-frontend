import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavTable from './components/NavTable';
import AddEntry from './components/AddEntry';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Header />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-entry">Add Entry</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<NavTable />} />
          <Route path="/add-entry" element={<AddEntry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
