import React from 'react';
import { useNavigate } from 'react-router-dom';
import  useFormLogin  from './loginForm'; 


const Login = () => {
  const { handleChange, handleSubmit } = useFormLogin();
  const navigate = useNavigate();
  return (
    <main className='main'>
      <form className='login-page'>
        <h2 className='login-title'>Login</h2>
        <label className='login-labels'>Email</label>
        <input className='login-input' type='email' name='email' autoComplete='off' onChange={handleChange}/>
        <label className='login-labels'>Senha</label>
        <input className='login-input' type='password' name='password' onChange={handleChange}/>
        <button className='login-button draw' onClick={handleSubmit}>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='login-button draw' onClick={() => { navigate('/signup') }}>Cadastre-se</button>
      </form>
    </main>
  );  
};

export default Login;