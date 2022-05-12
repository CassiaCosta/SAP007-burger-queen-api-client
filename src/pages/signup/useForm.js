import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/api";

const useForm = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (event) => {
    return setValues(() => {
      const auxValues = { ...values};
      auxValues[event.target.name] = event.target.value;
    })
  }

  const handleSubimit = (event) => {
    console.log('Entrou na função de evento handleSubimit');
    event.preventDefault();
    createUser('/users', values)
      .then(res => res.json())
      .then(navigate('/menu'))
      .catch(console.log('Entrou no cath do submit'))
  }

  return { handleChange, handleSubimit };
};

export default useForm;
