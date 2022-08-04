import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const minPasswordLength = 6;
  const errorMessage = false;
  const emailRegex = /\S+@\S+\.\S+/;

  const btnStatus = !((password.length >= minPasswordLength) && emailRegex.test(email));

  return (
    <section>
      <p> Email </p>
      <input
        data-testid="common_login__input-email"
        type="text"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <p> Password </p>
      <input
        data-testid="common_login__input-password"
        type="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ btnStatus }
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
      && <p data-testid="common_login__element-invalid-email"> Mensagem de erro.</p>}
    </section>
  );
}

export default Login;
