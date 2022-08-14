import axios from 'axios';

async function createSale(data) {
  const {
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    productsIds,
    quantity,
  } = data;
  const getUser = JSON.parse(localStorage.getItem('user'));
  const { token } = getUser;
  const config = { headers: { Authorization: token } };
  console.log(data);

  const sale = await axios.post(
    'http://localhost:3001/sale',
    {
      userId: getUser.id,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      sellerId: 2,
      productsIds,
      quantity,
    },
    config,
  );

  return sale;
}

export default createSale;
