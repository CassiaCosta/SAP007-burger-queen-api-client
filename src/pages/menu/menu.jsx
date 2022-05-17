// import React, { useState } from 'react';
import  useProducts  from './useProducts'; 
import ProductCards from '../../components/productInfos';



const Menu = () => {
  const { 
    handleButtonTypeClick,
    productsFiltered,
    productsType,
    handleSelectFlavor,
    handleSelectComplement,
    handleAddItem,
    items
  } = useProducts();

  return (
    <main className='main'>
      <p> MENU </p>
        <div className='menu-types'>
          <button className='menu-button' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
          <button className='menu-button' onClick={handleButtonTypeClick} value={'hamburguer'}>Hambúrgueres</button>
          <button className='menu-button' onClick={handleButtonTypeClick} value={'side'}>Acompanhamentos</button>
          <button className='menu-button' onClick={handleButtonTypeClick} value={'drinks'}>Bebidas</button>
        </div>
        {productsType === 'hamburguer' ? (
          <section>
            <select onChange={handleSelectFlavor}>
              <option value='escolher o sabor' selected disabled>Escolher o sabor</option>
              <option value='carne'>Carne</option>
              <option value='frango'>Frango</option>
              <option value='vegetariano'>Vegetariano</option>
            </select>
            <select onChange={handleSelectComplement}>
              <option value='escolher complemento' disabled selected>Escolher complemento</option>
              <option value='null'>Sem complemento</option>
              <option value='queijo'>Queijo</option>
              <option value='ovo'>Ovo</option>
            </select>
          </section>
        ) : ''}
        <div>
          <ul>
            {items.map((item, index) => <li key={index}>{item.name} {item.qtd} </li>)}
          </ul>
          {productsFiltered().map((element, index) => {
            return (
              <ProductCards
              key={index}
              image={element.image}
              name={element.name}
              flavor={element.flavor}
              complement={element.complement}
              price={element.price}
              onClick={() => handleAddItem(element)}
              />
            )
          })}
        </div>
    </main>
  );
};

export default Menu;
