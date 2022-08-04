import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const minPasswordLength = 6;
  const disabled = (password.length < minPasswordLength);

  return (
    <section>
      <p> Email </p>
      <input
        data-testid="common_login__input - email"
        type="text"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <p> Password </p>
      <input
        data-testid="common_login__input-password"
        type="text"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ disabled }
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
    </section>
  );
}

export default Login;
