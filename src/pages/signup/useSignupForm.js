import { useState } from "react";
import { createUser, loginUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { createTokenAndRole } from "../../services/localStorage";

const useFormSignup = () => {
  const [error, setError] = useState('');
  const [elements, setElements] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    return setElements(() => {
      const copyElements = { ...elements };
      copyElements[e.target.name] = e.target.value;
      return copyElements;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser("/users", elements)
      .then((res) => {
        switch (res.status) {
          case 200:
            return res.json();
          case 400:
            setError('Preencher todos os campos!')
            break;
          case 403:
            setError('E-mail já cadastrado!')
            break;
          default:
            setError('Algo deu errado. Tente novamente mais tarde!')
        }
      })
      .then((data) => {
        if (data.role === "attendent") {
          createTokenAndRole(data.token, data.role);
          loginUser("/auth", data);
          navigate("/menu");
        } else if (data.role === "chef") {
          createTokenAndRole(data.token, data.role);
          loginUser("/auth", data);
          navigate("/kitchen");
        }
      })
      .catch((error) => {
        //Erro de comunicação do fetch com a api
        setError('Algo deu errado. Tente novamente mais tarde!')
      });
  };

  return { handleChange, handleSubmit, error };
};
export default useFormSignup;
