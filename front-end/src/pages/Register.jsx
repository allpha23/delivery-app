import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input type='text' data-testid='common_register__input-name' placeholder='Seu Nome' />
      <input type='text' data-testid='common_register__input-email' placeholder='seu-email@site.com.br' />
      <input type='password' data-testid='common_register__input-password' placeholder='********' />
      <button type='button' data-testid='common_register__button-register' onClick={ () => (name, email, password) }>
        CADASTRAR
      </button>
    </>
  );

}

export default Register;