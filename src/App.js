import '../src/App.js'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './home/Home.js';
import Header from './components/header/Header.js'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
