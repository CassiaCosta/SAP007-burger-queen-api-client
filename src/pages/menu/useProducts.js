import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState();
  const [flavor, setFlavor] = useState();
  const [complement, setComplement] = useState('');
  const [items, setItems] = useState([]);

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

  return { handleButtonTypeClick, productsFiltered, productsType, handleSelectFlavor, handleSelectComplement, handleAddItem, items }
};
export default useProducts;