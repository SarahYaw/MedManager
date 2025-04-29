import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './components/read.tsx';
import Create from './components/create.tsx';
import Edit from './components/edit.tsx';
import Delete from './components/delete.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;