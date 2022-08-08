import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import login from '../services/Login';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [redir, setRedir] = useState(false);

  const minPasswordLength = 6;
  const emailRegex = /\S+@\S+\.\S+/;

  const tryLogin = async () => {
    try {
      const logging = await login(email, password);
      localStorage.setItem('token', JSON.stringify(logging.data));
      console.log(logging.data);
      setRedir(true);
    } catch (e) {
      setErrorMessage(true);
      console.log(e.message);
    }
  };
  const btnStatus = !((password.length >= minPasswordLength) && emailRegex.test(email));

  return (
    <section>
      <p> Email </p>
      <input
        id="email"
        name="email"
        data-testid="common_login__input-email"
        type="text"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <p> Password </p>
      <input
        id="password"
        name="password"
        data-testid="common_login__input-password"
        type="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ btnStatus }
        onClick={ tryLogin }
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
      {errorMessage
      && <p data-testid="common_login__element-invalid-email">404 - Not found</p>}
      { redir && <Redirect to="/customer/products" /> }
    </section>
  );
}

export default Login;
