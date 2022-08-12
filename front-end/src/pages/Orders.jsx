import React, { useEffect, useState } from 'react';
import ClientNavegation from '../components/ClientNavegation';
import SaleCard from '../components/SaleCard';
import getSalesByUserId from '../services/Sale';

export default function Orders() {
  const [saleData, setSaleData] = useState([]);

  const fetchSales = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const response = await getSalesByUserId(userData.id);
    setSaleData(response.data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <>
      <ClientNavegation />

      {saleData?.map((el, index) => (
        <SaleCard
          key={ index }
          id={ el.id }
          status={ el.status }
          date={ el.saleDate }
          price={ el.totalPrice }
        />
      ))}

      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        Ver carrinho
      </button>
    </>
  );
}
