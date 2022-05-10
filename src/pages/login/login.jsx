import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  return (
    <div className='main'>
      <form className='login-page'>
        <h2 className='login-title'>Login</h2>
        <label className='login-labels'>Email</label>
        <input className='login-input' type='email' name='email' autoComplete='off'/>
        <label className='login-labels'>Senha</label>
        <input className='login-input' type='password' name='password' />
        <button className='login-button draw' type='submit'>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='login-button draw' onClick={() => { history('/signup') }}>Cadastre-se</button>
      </form>
    </div>
  );  
};

export default Login;