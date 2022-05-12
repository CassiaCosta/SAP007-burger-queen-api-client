import { useState } from "react";
import { createUser, loginUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { TokenAndRole } from "../../services/localStorage";

const useFormSignup = () => {
  const [elements, setElements] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    return setElements(() => {
      const copyElements = { ...elements };
      copyElements[e.target.name] = e.target.value;
      return copyElements;
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser("/users", elements)
      .then((res) => {
        switch (res.status) {
          case 200:
            return res.json();
          case 400:
            console.log("Falta algo a ser preenchido!");
            break;
          case 403:
            console.log("E-mail já cadastrado");
            break;
        }
      })
      .then((data) => {
        if (data.role === "attendent") {
          TokenAndRole(data.token, data.role);
          loginUser("/auth", data);
          navigate("/menu");
        } else if (data.role === "chef") {
          TokenAndRole(data.token, data.role);
          loginUser("/auth", data);
          navigate("/kitchen");
        }
      })
      .catch((error) => {
        //Erro de comunicação do fetch com a api
      });
  };

  return { handleChange, handleSubmit };
};
export default useFormSignup;
