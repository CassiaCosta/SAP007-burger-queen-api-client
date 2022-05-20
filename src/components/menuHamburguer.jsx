import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const MenuHamburguer = () => {
  const navigate = useNavigate();
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  }
  return (
    <div>
      <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <ul className="listItems">
            <li>
              <button>FAZER PEDIDO</button>
            </li>
            <li>
              <button>EM PREPARO</button>
            </li>
            <li>
              <button>PEDIDOS PRONTOS</button>
            </li>
            <li className='btnBack'>
              <button onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                navigate('/');
              }}>SAIR</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuHamburguer;
