import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />
      <input
        type="text"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button type="button">LOGIN</button>
      <button type="button">Ainda não tenho conta</button>
    </>
  );
}

export default Login;
