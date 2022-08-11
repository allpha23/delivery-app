import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Register, Products } from './pages';
import Provider from './context/Provider';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/customer/products">
            <Products />
          </Route>
          <Route exact path="/customer/checkout">
            <Checkout />
          </Route>
          <Route exact path="/customer/orders">
            <Orders />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
