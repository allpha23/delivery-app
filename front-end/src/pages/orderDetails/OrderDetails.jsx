import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClientNavegation from '../../components/clientNavegation/ClientNavegation';
import SaleCardDetails from '../../components/saleCardDetails/SaleCardDetails';
import { getSaleById, update } from '../../services/Sale';
import formatDate from '../../components/formatDate';
import styles from './styles.module.scss';

const statusTest = 'customer_order_details__element-order-details-label-delivery-status';

export default function OrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [render, setRender] = useState(false);
  const [check, setCheck] = useState(true);
  const [isPreper, setIsPreper] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const fetchSale = async () => {
    const saleData = await getSaleById(id);
    setSale(saleData.data);
    setRender(true);
    if (saleData.data.status === 'Em Trânsito') setCheck(false);
    if (sale.status === 'Preparando') setIsPreper(true);
    if (sale.status === 'Entregue') setIsDelivered(true);
  };

  const updateStatus = async () => {
    const saleUpdate = await update('Entregue', id);
    setCheck(true);
    return saleUpdate;
  };

  useEffect(() => {
    fetchSale();
  }, [check]);

  return (
    <div>
      <ClientNavegation />
      {render && (
        <div className={ styles.container }>

          <p>Detalho do Pedido</p>
          <div className={ styles.order }>
            <p
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              {`Pedido ${id}`}
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-seller-name"
            >
              {`P. Vend: ${sale.Seller.name}`}
            </p>
            <p data-testid="customer_order_details__element-order-details-label-order-date">
              {formatDate(sale.saleDate)}
            </p>
            <p
              className={ `${styles.status}
              ${isPreper && styles.preper} ${isDelivered && styles.delivered}` }
              data-testid={ statusTest }
            >
              {sale.status}
            </p>
            <button
              data-testid="customer_order_details__button-delivery-check"
              type="button"
              onClick={ updateStatus }
              disabled={ check }
            >
              Marcar como entregue
            </button>
          </div>

          <table className={ styles.table }>
            <thead>
              <tr>
                <th className={ styles.thNumber }>Item</th>
                <th className={ styles.thName }>Descrição</th>
                <th className={ styles.thQuantity }>Quantidade</th>
                <th className={ styles.thValue }>Valor Unitário</th>
                <th className={ styles.thSubTotal }>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {sale.products.map((p, i) => (
                <SaleCardDetails
                  key={ p.id }
                  item={ i + 1 }
                  quantity={ p.salesProduct.quantity }
                  price={ p.price }
                  name={ p.name }
                />
              ))}
            </tbody>
            <section data-testid="customer_order_details__element-order-total-price">
              {`Total R$${sale.totalPrice.replace('.', ',')}`}
            </section>
          </table>
        </div>
      )}
    </div>
  );
}
