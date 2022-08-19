import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { NextPage } from './components/NextPage';
import './App.css'


import './App.css';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
