import { getProducts } from "../../services/api";

const useProducts = () => {

  const handleButtonTypeClick = (e) => {
    getProducts ('/produtos')
    .then (response => response.json());
    };

  return { handleButtonTypeClick }
};
export default useProducts;