import React, { useEffect, useState } from 'react';
import ClientNavegation from '../components/clientNavegation/ClientNavegation';
import SellerCard from '../components/SellerCard';
import { getSalesBySellerId } from '../services/Sale';

export default function SellerOrders() {
  const [saleData, setSaleData] = useState([]);

  const fetchSales = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const response = await getSalesBySellerId(userData.id);
    setSaleData(response.data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  console.log(saleData);

  return (
    <>
      <ClientNavegation />

      {saleData?.map((el, index) => (
        <SellerCard
          key={ index }
          id={ el.id }
          status={ el.status }
          date={ el.saleDate }
          price={ el.totalPrice }
          address={ el.deliveryAddress }
        />
      ))}
    </>
  );
}
