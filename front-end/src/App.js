import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Provider from './context/Provider';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import SellerOrders from './pages/SellerOrders';
import SellerOrdersDetail from './pages/SellerOrdersDetail';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Checkout from './pages/Checkout';
import Products from './pages/products/Products';

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
          <Route exact path="/customer/orders/:id">
            <OrderDetails />
          </Route>
          <Route exact path="/seller/orders">
            <SellerOrders />
          </Route>
          <Route exact path="/seller/orders/:id">
            <SellerOrdersDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
