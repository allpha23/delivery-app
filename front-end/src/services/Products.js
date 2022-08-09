import axios from 'axios';

const getProducts = async () => {
  const response = await axios.get(
    'http://localhost:3001/product',
  );
  return response;
};

export default getProducts;
