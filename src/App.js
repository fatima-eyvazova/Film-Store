import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './redux/store.js';
import '../src/App.js'
import './App.css';
import Home from './pages/home/Home.js';
import Header from './components/header/Header.js'
import FilmPage from './pages/film-page/FilmPage.js';
import OrderPage from './pages/order-page/OrderPage.js';

function App() {
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/app/:title' element={<FilmPage />} />
              <Route exact path='/order' element={<OrderPage />} />
            </Routes>
          </PersistGate>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
