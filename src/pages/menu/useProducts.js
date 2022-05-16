import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState();

  const getData = async () => {
    const data = await getProducts('/products');
    setProducts(data);
  };

  useEffect(() => {
    getData()
  }, []);

  const handleButtonTypeClick = (e) => {
    setProductsType(e.target.value);
  };

  const productsFiltered = () => {
    if(productsType === 'breakfast') {
      return products.filter((elem) => elem.type === 'breakfast')
    } else if( productsType === 'allday') {
      return products.filter((elem) => elem.type === 'all-day')
    }
    console.log(products)
    return []
  }

  return { handleButtonTypeClick, productsFiltered }
};
export default useProducts;