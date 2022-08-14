import axios from 'axios';

const getSalesByUserId = async (id) => {
  const sales = await axios.get(`http://localhost:3001/sale/user/${id}`);
  return sales;
};

const getSalesBySellerId = async (id) => {
  const sales = await axios.get(`http://localhost:3001/sale/seller/${id}`);
  return sales;
};

const getSaleById = async (id) => {
  const sales = await axios.get(`http://localhost:3001/sale/${id}`);
  return sales;
};

const update = async (status, id) => {
  const saleUpdate = await axios.patch(
    `http://localhost:3001/sale/${id}`,
    { status },
  );
  return saleUpdate;
};

export { getSalesByUserId, getSalesBySellerId, getSaleById, update };
