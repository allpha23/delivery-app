import axios from 'axios';

async function createSale(totalPrice, deliveryAddress, deliveryNumber) {
  const getUser = JSON.parse(localStorage.getItem('user'));

  const sale = await axios.post(
    'http://localhost:3001/sale',
    { userId: getUser.id,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'pendente',
      sellerId: 2 },
  );

  return sale;
}

export default createSale;
