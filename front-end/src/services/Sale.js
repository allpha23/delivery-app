import axios from 'axios';

const getSalesByUserId = async (id) => {
  const sales = await axios.get(`http://localhost:3001/sale/user/${id}`);
  return sales;
};

const getSaleById = async (id) => {
  const sales = await axios.get(`http://localhost:3001/sale/${id}`);
  return sales;
};

export { getSalesByUserId, getSaleById };
