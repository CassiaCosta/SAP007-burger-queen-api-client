import { useEffect, useState } from "react";
import { getProducts, sendOrder } from "../../services/api";
import { getRole } from '../../services/localStorage.js'

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');
  const [flavor, setFlavor] = useState();
  const [complement, setComplement] = useState('');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderInfo, setOrderInfo] = useState({ client: '', table: '' });

  const getData = async () => {
    const data = await getProducts('/products');
    setProducts(data);
  };

  useEffect(() => {
    getData()
  }, []);

  const handleButtonTypeClick = (e) => {
    setProductsType(e.target.value);
    console.log(e.target.value)
  }
  const handleSelectFlavor = (e) => setFlavor(e.target.value);
  const handleSelectComplement = (e) => setComplement(e.target.value);

  const handleAddItem = (product) => {
    console.log(product)
    const productIndex = items.findIndex((item) => item.id === product.id)
    if(productIndex === -1) {
      setItems([...items, {...product, qtd: 1}])
    } else {
      items[productIndex].qtd += 1
      setItems([...items])
    }
  }

  const productsFiltered = () => {
    if(productsType === 'breakfast') {
      return products.filter((elem) => elem.type === 'breakfast')
    } else if( productsType === 'hamburguer') {
      let filterHamburguer = products.filter((elem) => elem.flavor === flavor);
      if(complement !== '') {
        filterHamburguer = filterHamburguer.filter((elem) => elem.complement === complement)
      }
      return filterHamburguer;
      // return products.filter((elem) => elem.sub_type === 'hamburguer')
      // return products.filter((elem) => elem.id === 33 || elem.id === 42)
    } else if( productsType === 'side' || productsType === 'drinks') {
      return products.filter((elem) => elem.sub_type === productsType)
    }
    console.log(products)
    return []
  }

  useEffect(() => {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    setTotal(() => {
      const price = items.map((elem) => elem.qtd * elem.price);
      return price.reduce(sum, 0);
    })
  }, [items]);

  const handleOrderChange = (e) => {
    return setOrderInfo(() => {
      const auxValues = { ...orderInfo };
      auxValues[e.target.name] = e.target.value;
      return auxValues;
    });
  };

  const handleSendToKitchen = () => {
    if (getRole() === 'attendent') {
      sendOrder('/orders', orderInfo, items)
        .then((res => res.json()))
        .then((data) => {
          if (data.code === 400) {
            console.log('Preencha os campos com as informações do cliente');
          } else {
            console.log('Pedido enviado para a cozinha com sucesso');
            setItems([]);
          }
        });
    }
  };

  return { handleButtonTypeClick, productsFiltered, productsType, handleSelectFlavor, handleSelectComplement, handleAddItem, items, handleSendToKitchen, handleOrderChange,total }
};
export default useProducts;