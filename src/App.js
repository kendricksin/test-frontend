import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavTable from './components/NavTable';
import AddEntry from './components/AddEntry';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-entry">Add Entry</Link>
        </nav>
        <Routes>
          <Route exact path="/" component={NavTable} />
          <Route path="/add-entry" component={AddEntry} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
