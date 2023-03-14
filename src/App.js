import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../src/App.js'
import './App.css';
import Home from './pages/home/Home.js';
import Header from './components/header/Header.js'
import store from './redux/store.js';
import GamePage from './pages/game-page/GamePage.js';
import OrderPage from './pages/order-page/OrderPage.js';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/app/:title' element={<GamePage />} />
            <Route exact path='/order' element={<OrderPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
