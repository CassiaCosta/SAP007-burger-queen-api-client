import React from 'react';
import  useProducts  from './produts'; 


const Menu = () => {
  const { handleButtonTypeClick } = useProducts();
  return (
    <main className='main'>
      <p> MENU </p>
        <div className='menu-types'>
          <button className='menu-button' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
          <button className='menu-button' onClick={handleButtonTypeClick} value={'allday'}>O dia todo</button>
        </div>
    </main>
  );
};

export default Menu;
