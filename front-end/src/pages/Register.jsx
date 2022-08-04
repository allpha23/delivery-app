import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const minPasswordLength = 6;
  const minNameLength = 12;
  const emailRegex = /\S+@\S+\.\S+/;

  const btnStatus = !(name.length >= minNameLength
    && emailRegex.test(email) && (password.length >= minPasswordLength));

  return (
    <>
      <input
        type="text"
        data-testid="common_register__input-name"
        placeholder="Seu Nome"
      />
      <input
        type="text"
        data-testid="common_register__input-email"
        placeholder="seu-email@site.com.br"
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="********"
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ btnStatus }
        onClick={ () => (name) }
      >
        CADASTRAR
      </button>
    </>
  );
}

export default Register;
