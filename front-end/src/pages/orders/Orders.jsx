import React, { useEffect, useState } from 'react';
import ClientNavegation from '../../components/clientNavegation/ClientNavegation';
import SaleCard from '../../components/saleCard/SaleCard';
import { getSalesByUserId } from '../../services/Sale';
import styles from './styles.module.scss';

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
      <div className={ styles.container }>
        {saleData?.map((el, index) => (
          <SaleCard
            key={ index }
            id={ el.id }
            status={ el.status }
            date={ el.saleDate }
            price={ el.totalPrice }
          />
        ))}
      </div>
    </>
  );
}
