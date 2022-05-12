import React from 'react';
// import { useNavigate } from 'react-router-dom';
import useForm from './useForm';

const SignUp = () => {
  // const navigate = useNavigate();
  const { handleChange, handleSubimit } = useForm();

  return (
    <div className='main'>
      <section className='signup-page'>
        <h1 className='signup-title'>Cadastre-se</h1>
        <label className='signup-labels'>Seu nome</label>
        <input className='signup-input' type='text' placeholder='Nome' name='name' autoComplete='off' onChange={handleChange} />
        <label className='signup-labels'>Cargo</label>
        <select className='signup-select' autoComplete='off' name='role' onChange={handleChange}>
          <option value=''>Selecione um cargo</option>
          <option value='attendant'>Atendente</option>
          <option value='chef'>Chef de Cozinha</option>
        </select>
        <label className='signup-labels'>Email</label>
        <input className='signup-input' type='email' placeholder='username@example.com' name='email' autoComplete='off' onChange={handleChange} />
        <label className='signup-labels'>Senha</label>
        <input className='signup-input' type='password' placeholder='Senha' name='password' onChange={handleChange} />
        <label className='signup-labels'>Confirme sua senha</label>
        <input className='signup-input' type='password' placeholder='Confirme sua senha' name='confirmPassword' onChange={handleChange} />
        <span className='errors-message'>
        </span>
        <button className='signup-button draw' type='submit' onClick={handleSubimit}>Cadastrar</button>  
      </section>
    </div>
  );
};

export default SignUp;