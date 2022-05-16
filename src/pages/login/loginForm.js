import { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { createTokenAndRole } from '../../services/localStorage';
//import { apiResponse } from '../../services/validate';


const useFormLogin = () => {
  const [error, setError] = useState('')
  const [items, setItems] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    return setItems(() => {
      const copyItems = { ...items };
      copyItems[e.target.name] = e.target.value;
      return copyItems;
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser('/auth', items)
    .then((res) => {
      switch (res.status) {
        case 200:
          return res.json();
        case 400:
          console.log('E-mail e/ou senha inválidos!');
          setError('E-mail e/ou senha inválidos!')
          break;
        default:
      }
    })
      .then((data) => {
        if (data.role === 'attendant') {
          createTokenAndRole(data.token, data.role);
          navigate('/menu');
        } else if (data.role === 'chef') {
          createTokenAndRole(data.token, data.role);
          navigate('/kitchen');
        }
      })
      .catch((error) => {
        //Erro de comunicação do fetch com a api
      });
  };

  return { handleChange, handleSubmit, error };
};

export default useFormLogin;