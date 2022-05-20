import React from "react";
import { useEffect } from "react";
import useKitchen from "./useKitchen.js";
import OrderCard from "../../components/orderCards";
import styles from './kitchen.module.css';
import MenuHamburguer from "../../components/menuHamburguer.jsx";
import logo from '../../img/logo.png';

const Kitchen = () => {
  const {
    setOrders,
    getData,
    ordersFiltered,
    handleStatus,
    orders,
    orderStatus,
  } = useKitchen();

  useEffect(() => {
    const interval = setInterval(() => {
      return getData();
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (orderStatus.status === "finalizado") {
      return orderStatus.map((order) => {
        const foundOrder = orders
          .map((elem) => elem)
          .findIndex((item) => item.id === order.id);
        if (foundOrder !== -1) {
          const removed = orders;
          removed.splice(foundOrder, 1);
          setOrders([...removed]);
        }
        return orders;
      });
    }
  }, [orderStatus]);

  return (
    <div className={styles.root}>
      <main className="kitchen-main">
        <nav>
          <nav className={styles.navBar}>
            <div className={styles.menuHamburguer}>
              <MenuHamburguer />
            </div>
            <picture>
              <img src={logo} alt="Logo Vai Dar Bom" className={styles.logo} />
            </picture>
          </nav>
        </nav>
        <ul className={styles.wishList}>
          {ordersFiltered().map((elem) => {
            const clientProducts = elem.Products;
            const product = clientProducts.map((product) => product);
            return (
              <li key={elem.id}>
                <OrderCard
                  id={elem.id}
                  name={elem.client_name}
                  table={elem.table}
                  status={elem.status}
                  createdAt={elem.createdAt}
                  onClick={() => handleStatus(elem)}
                  products={product}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
export default Kitchen;
