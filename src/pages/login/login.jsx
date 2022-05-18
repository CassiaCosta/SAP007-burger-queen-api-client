import React from 'react';

import { useNavigate } from 'react-router-dom';
import  useFormLogin  from './loginForm'; 

import logo from '../../img/logo.png'
import styles from './login-signup.module.css'


const Login = () => {
  const { handleChange, handleSubmit, error } = useFormLogin();
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <picture>
          <img src={logo} alt='Logo Vai Dar Bom' className={styles.logo} />
        </picture>
        <form>
          <h2 className={styles.formTitle}>Login</h2>
          <input className={styles.inputForm} type='email' name='email' placeholder='E-mail' autoComplete='off' onChange={handleChange}/>
          <input className={styles.inputForm} type='password' name='password' placeholder='Senha' onChange={handleChange}/>
          <span className={styles.errorMessage}>{error}</span>
          <button className={styles.btnLogin} onClick={handleSubmit}>Entrar</button>
          <div className={styles.gotToRegistration}>
            <p className={styles.textGotToRegistration}>Não possui cadastro?</p>
            <button className={styles.gotToRegisterButton} onClick={() => { navigate('/signup') }}>Cadastre-se</button>
          </div>
        </form>
      </main>
    </div>
  );  
};

export default Login;