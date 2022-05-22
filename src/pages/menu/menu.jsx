import useProducts  from './useProducts';
import ProductCards from '../../components/productInfos';
import Cart from '../../components/cart';
import ResultPrice from '../../components/resultPrice';
import MenuHamburguer from '../../components/menuHamburguer';

import logo from '../../img/logo.png';
import styles from './menu.module.css';



const Menu = () => {
  const { 
    handleButtonTypeClick,
    productsFiltered,
    handleAddItem,
    handleSelectComplement,
    handleSelectFlavor,
    handleDeleteProducts,
    handleSendToKitchen,
    handleOrderChange,
    productsType,
    total,
    items,
    orderError,
    orderInfo
  } = useProducts();
  
  return (
    <div className={styles.root}>
      <main>
        <nav className={styles.navBar}>
          <div className={styles.menuHamburguer}>
            <MenuHamburguer />
          </div>
          <picture>
            <img src={logo} alt='Logotipo Vai Dar Bom' className={styles.logo} />
          </picture>
        </nav>
        <section className={styles.attendantTabe}>
          <section className={styles.orderingTab}>
            <div>
              <div className={styles.orderSelection}>
                <button className={styles.selectionButton} onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
                <button className={styles.selectionButton} onClick={handleButtonTypeClick} value={'hamburguer'}>Hambúrgueres</button>
                <button className={styles.selectionButton} onClick={handleButtonTypeClick} value={'side'}>Acompanhamentos</button>
                <button className={styles.selectionButton} onClick={handleButtonTypeClick} value={'drinks'}>Bebidas</button>
              </div>
              {productsType === 'hamburguer' ? (
                <section className={styles.flavorAndComplementSelection}>
                  <select className={styles.selectFlavor} defaultValue={'sabor'} onChange={handleSelectFlavor}>
                    <option value='sabor'>Sabor</option>
                    <option value='carne'>Carne</option>
                    <option value='frango'>Frango</option>
                    <option value='vegetariano'>Vegetariano</option>
                  </select>
                  <div defaultValue={'complemento'} className={styles.selectComplement} onChange={handleSelectComplement}>
                    <input type='radio' name='check' value='queijo' className={styles.cheeseComplement} onChange={handleSelectComplement} /> Queijo
                    <input type='radio' name='check' value='ovo' className={styles.eggComplement} onChange={handleSelectComplement} /> Ovo
                  </div>
                </section>
              ) : ''}
            </div>
            <ul className={styles.productList}>
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
          <section className={styles.orderSection}>
            <div className={styles.orderSectionTitle}>
              <h3>Pedido</h3>
            </div>
            <div className={styles.clientInformation}>
              <input className={styles.clientName} type='text' placeholder='CLIENTE' name='client' 
              autoComplete='off' onChange={handleOrderChange} value={orderInfo.client}/>
              <select className={styles.clientTable} autoComplete='off' 
              name='table' onChange={handleOrderChange} value={orderInfo.table}>
                <option value=''>MESA</option>
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
                  onClick={() => handleDeleteProducts(item)}
                  />
                )
              })}
            </ul>
            <section className={styles.finalization}>
              <div className={styles.totalOrder}>
                <h4>SUB-TOTAL</h4>
                <ResultPrice value={total} />
              </div>
              <p className={styles.orderError}>{orderError}</p>
              <button className={styles.finalizeOrder} onClick={handleSendToKitchen}>Finalizar pedido</button>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Menu;
