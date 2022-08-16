import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import register from '../../services/Register';
import styles from './styles.module.scss';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [redir, setRedir] = useState(false);

  const minPasswordLength = 6;
  const minNameLength = 12;
  const emailRegex = /\S+@\S+\.\S+/;

  const tryRegister = async () => {
    try {
      const info = await register(name, email, password, 'customer');
      localStorage.setItem('user', info.data);
      setRedir(true);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(true);
    }
  };

  const btnStatus = !(name.length >= minNameLength
    && emailRegex.test(email) && (password.length >= minPasswordLength));

  return (
    <section className={ styles.container }>
      <form className={ styles.form }>

        <h2>Registro</h2>

        <input
          className={ styles.input }
          type="text"
          data-testid="common_register__input-name"
          placeholder="Seu Nome"
          onChange={ (e) => setName(e.target.value) }
        />

        <input
          className={ styles.input }
          type="text"
          data-testid="common_register__input-email"
          placeholder="seu-email@site.com.br"
          onChange={ (e) => setEmail(e.target.value) }
        />

        <input
          className={ styles.input }
          type="password"
          data-testid="common_register__input-password"
          placeholder="********"
          onChange={ (e) => setPassword(e.target.value) }
        />

        <button
          className={ styles.button }
          type="button"
          data-testid="common_register__button-register"
          disabled={ btnStatus }
          onClick={ tryRegister }
        >
          CADASTRAR
        </button>

      </form>
      {errorMessage
      && <p data-testid="common_register__element-invalid_register">404 - Not found</p>}
      { redir && <Redirect to="/customer/products" /> }
    </section>
  );
}

export default Register;
