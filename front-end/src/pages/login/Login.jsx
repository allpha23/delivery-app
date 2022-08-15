import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import login from '../../services/Login';
import styles from './styles.module.scss';

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
      localStorage.setItem('user', JSON.stringify(logging.data));
      setRedir(true);
    } catch (e) {
      setErrorMessage(true);
      console.log(e.message);
    }
  };

  const isLogged = () => {
    const getUser = JSON.parse(localStorage.getItem('user'));
    if (getUser) {
      setRedir(true);
    }
  };

  const redirByRole = () => {
    const getUser = JSON.parse(localStorage.getItem('user'));

    if (getUser.role === 'seller') {
      return <Redirect to="/seller/orders" />;
    }
    return <Redirect to="/customer/products" />;
  };

  useEffect(() => {
    isLogged();
  }, []);

  const btnStatus = !((password.length >= minPasswordLength) && emailRegex.test(email));

  return (
    <section className={ styles.container }>
      <form className={ styles.form }>
        <h2> Delivery App </h2>

        <div className={ styles.inputContainer }>
          <label className={ styles.label }>Email:</label>
          <div className={ styles.inputContent }>
            <input
              className={ styles.input }
              id="email"
              name="email"
              data-testid="common_login__input-email"
              type="text"
              placeholder="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
        </div>

        <div className={ styles.inputContainer }>
          <label className={ styles.laber }>Password:</label>
          <div className={ styles.inputContent }>
            <input
              className={ styles.input }
              id="password"
              name="password"
              data-testid="common_login__input-password"
              type="password"
              placeholder="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>
        </div>

        <button
          className={ styles.button }
          data-testid="common_login__button-login"
          type="button"
          disabled={ btnStatus }
          onClick={ tryLogin }
        >
          LOGIN
        </button>

        <button
          className={ styles.btnRegister }
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
        {errorMessage
      && <p data-testid="common_login__element-invalid-email">404 - Not found</p>}
        { redir && redirByRole() }
      </form>
    </section>
  );
}

export default Login;
