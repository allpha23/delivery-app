import axios from 'axios';

const getSalesByUserId = async (id) => {
  const sales = await axios.get(`http://localhost:3001/sale/${id}`);
  return sales;
};

export default getSalesByUserId;
