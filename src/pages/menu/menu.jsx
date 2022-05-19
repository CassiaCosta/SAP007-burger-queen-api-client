import  useProducts  from './useProducts'; 
import ProductCards from '../../components/productInfos';
import Cart from '../../components/cart';

import logo from '../../img/logo.png';
import styles from './menu.module.css';



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
    <div className={styles.root}>
      <main className={styles.main}>
        <nav className={styles.navBar}>
          <ul className={styles.menuHamburguer}>
            <li>MENU</li>
          </ul>
          <picture>
            <img src={logo} alt="Logo Vai Dar Bom" className={styles.logo} />
          </picture>
        </nav>
        <section className={styles.abaAtendente}>
          <section className={styles.sectionMenu}>
            <div>
              <div className={styles.selectionMenu}>
                <button className={styles.buttonMenu} onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
                <button className={styles.buttonMenu} onClick={handleButtonTypeClick} value={'hamburguer'}>Hambúrgueres</button>
                <button className={styles.buttonMenu} onClick={handleButtonTypeClick} value={'side'}>Acompanhamentos</button>
                <button className={styles.buttonMenu} onClick={handleButtonTypeClick} value={'drinks'}>Bebidas</button>
              </div>
              {productsType === 'hamburguer' ? (
                <section className={styles.selects}>
                  <select className={styles.selectFlavor} defaultValue={'sabor'} onChange={handleSelectFlavor}>
                    <option value='sabor'>Sabor</option>
                    <option value='carne'>Carne</option>
                    <option value='frango'>Frango</option>
                    <option value='vegetariano'>Vegetariano</option>
                  </select>
                  <div defaultValue={'complemento'} className={styles.selectComplement} onChange={handleSelectComplement}>
                    <input type='radio' name='check' value='queijo' className={styles.complementQueijo} onChange={handleSelectComplement} /> Queijo
                    <input type='radio' name='check' value='ovo' className={styles.complementOvo} onChange={handleSelectComplement} /> Ovo
                  </div>
                </section>
              ) : ''}
            </div>
            <ul className={styles.listProducts}>
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
            </ul>
          </section>
          <section className={styles.sectionPedido}>
            <div className={styles.sectionPedidoTitle}>
              <h3>Pedido</h3>
            </div>
            <div className={styles.infosCliente}>
              <input className={styles.nameCliente} type='text' placeholder='Nome do cliente' name='client' autoComplete='off'/>
              <select className={styles.mesaCliente} defaultValue={'0'} autoComplete='off' name='table'>
                <option value='0'>Selecionar mesa</option>
                <option value='1'>Mesa 1</option>
                <option value='2'>Mesa 2</option>
                <option value='3'>Mesa 3</option>
                <option value='4'>Mesa 4</option>
                <option value='5'>Mesa 5</option>
                <option value='6'>Mesa 6</option>
                <option value='7'>Mesa 7</option>
                <option value='8'>Mesa 8</option>
                <option value='9'>Mesa 9</option>
                <option value='10'>Mesa 10</option>
              </select>
            </div>  
            <ul>
              {items.map((item, index) => {
                return (
                  <Cart 
                  key={index}
                  name={item.name}
                  flavor={item.flavor} 
                  complement={item.complement}
                  price={item.price}
                  qtd={item.qtd} 
                  type={item.sub_type}
                  />
                )
              })}
            </ul>
            <section className={styles.final}>
              <div className={styles.totalPedido}>
                <h4>SUB-TOTAL</h4>
                <p>R$ 34,00</p>
              </div>
              <button className={styles.finalizarPedido}>Finalizar pedido</button>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Menu;
