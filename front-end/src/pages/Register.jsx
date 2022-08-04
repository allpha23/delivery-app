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
    <section>
      <p>Nome</p>
      <input
        type="text"
        data-testid="common_register__input-name"
        placeholder="Seu Nome"
        onChange={ (e) => setName(e.target.value) }
      />
      <p>Email</p>
      <input
        type="text"
        data-testid="common_register__input-email"
        placeholder="seu-email@site.com.br"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <p>Senha</p>
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
    </section>
  );
}

export default Register;
