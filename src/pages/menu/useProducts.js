import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState();
  const [flavor, setFlavor] = useState();
  const [complement, setComplement] = useState();
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
      if(flavor === 'carne') {
        return products.filter((elem) => elem.flavor === 'carne')
      } else if(flavor === 'frango') {
        return products.filter((elem) => elem.flavor === 'frango')
      } else if(flavor === 'vegetariano') {
        return products.filter((elem) => elem.flavor === 'vegetariano')
      }
      // return products.filter((elem) => elem.sub_type === 'hamburguer')
      return products.filter((elem) => elem.id === 33 || elem.id === 42)
    } else if( productsType === 'side') {
      return products.filter((elem) => elem.sub_type === 'side')
    } else if( productsType === 'drinks') {
      return products.filter((elem) => elem.sub_type === 'drinks')
    }
    console.log(products)
    return []
  }

  return { handleButtonTypeClick, productsFiltered, productsType, handleSelectFlavor, handleSelectComplement, handleAddItem, items }
};
export default useProducts;