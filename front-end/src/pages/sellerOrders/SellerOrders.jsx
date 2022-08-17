import React, { useEffect, useState } from 'react';
import ClientNavegation from '../../components/clientNavegation/ClientNavegation';
import SellerCard from '../../components/sellerCard/SellerCard';
import { getSalesBySellerId } from '../../services/Sale';
import styles from './styles.module.scss';

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
      <div className={ styles.container }>
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
      </div>
    </>
  );
}
