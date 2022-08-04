import React, { useState } from 'react';

function Register() {
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
        onChange={ (e) => setName(e.target.value) }
      />
      <input
        type="text"
        data-testid="common_register__input-email"
        placeholder="seu-email@site.com.br"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="********"
        onChange={ (e) => setPassword(e.target.value) }
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
