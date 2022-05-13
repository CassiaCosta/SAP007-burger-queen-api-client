import { useState } from 'react';
import { createUser, loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { createTokenAndRole } from '../../services/localStorage';
//import { apiResponse } from '../../services/validate';


const useFormSignup = () => {
  const [items, setItems] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
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
    createUser('users', items)
    .then((res) => {
      switch (res.status) {
        case 200:
          return res.json();
        case 400:
          alert ('Falta algo a ser preenchido!');
          break;
        case 403:
          alert ('E-mail já cadastrado');
          break;
        default:
      }
    })
      .then((data) => {
        if (data.role === 'attendant') {
          createTokenAndRole(data.token, data.role);
          loginUser('auth', data);
          navigate('/menu');
        } else if (data.role === 'chef') {
          createTokenAndRole(data.token, data.role);
          loginUser('auth', data);
          navigate('/kitchen');
        }
      })
      .catch((error) => {
        //Erro de comunicação do fetch com a api
      });
  };

  return { handleChange, handleSubmit };
};
export default useFormSignup;
