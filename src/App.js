import '../src/App.js'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Home from './home/Home.js';
import Header from './components/header/Header.js'
import store from './redux/store.js';
function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
