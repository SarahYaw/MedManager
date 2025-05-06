import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing components for different routes
import Read from './components/Read.tsx';
import Create from './components/Create.tsx';
import Update from './components/Update.tsx';
import Delete from './components/Delete.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/" element={<Read />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
