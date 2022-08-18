import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClientNavegation from '../../components/clientNavegation/ClientNavegation';
import SellerCardDetail from '../../components/sellerCardDetail/SellerCardDetail';
import { getSaleById, update } from '../../services/Sale';
import formatDate from '../../components/formatDate';
import styles from './styles.module.scss';

const statusTest = 'seller_order_details__element-order-details-label-delivery-status';

export default function SellerOrdersDetail() {
  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [render, setRender] = useState(false);
  const [prepere, setPrepere] = useState(false);
  const [transit, setTransit] = useState(true);
  const [isPreper, setIsPreper] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const fetchSale = async () => {
    const saleData = await getSaleById(id);
    setSale(saleData.data);
    setRender(true);
    if (saleData.data.status === 'Preparando') {
      setPrepere(true);
      setTransit(false);
    }
    if (saleData.data.status === 'Em Trânsito') setTransit(true);
    if (saleData.data.status === 'Entregue') setPrepere(true);
    if (sale.status === 'Preparando') setIsPreper(true);
    if (sale.status === 'Entregue') setIsDelivered(true);
  };

  const updateStatus = async (e) => {
    const { value } = e.target;

    if (value === 'Em Trânsito') {
      const saleUpdate = await update(value, id);
      setTransit(true);
      return saleUpdate;
    }

    const saleUpdate = await update(value, id);
    setPrepere(true);
    setTransit(false);
    return saleUpdate;
  };

  useEffect(() => {
    fetchSale();
  }, [prepere, transit]);

  return (
    <div>
      <ClientNavegation />
      {render && (
        <div className={ styles.container }>
          <p>Detalho do Pedido</p>
          <div className={ styles.order }>
            <p
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              {`Pedido: ${id}`}
            </p>
            <p data-testid="seller_order_details__element-order-details-label-order-date">
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
              className={ styles.btnPreper }
              data-testid="seller_order_details__button-preparing-check"
              type="button"
              value="Preparando"
              onClick={ updateStatus }
              disabled={ prepere }
            >
              Preparar Pedido
            </button>
            <button
              className={ styles.btnTransit }
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
              value="Em Trânsito"
              onClick={ updateStatus }
              disabled={ transit }
            >
              Saiu para entrega
            </button>
          </div>

          <table className={ styles.table }>
            <thead>
              <tr>
                <th className={ styles.thNumber }>Item</th>
                <th className={ styles.thName }>Descrição</th>
                <th className={ styles.thQuantity }>Quantidade</th>
                <th className={ styles.thValue }>Valor Unitário</th>
                <th className={ styles.thSubTotal }> Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {sale.products.map((p, i) => (
                <SellerCardDetail
                  key={ p.id }
                  item={ i + 1 }
                  quantity={ p.salesProduct.quantity }
                  price={ p.price }
                  name={ p.name }
                />
              ))}
            </tbody>
            <section data-testid="seller_order_details__element-order-total-price">
              {`Total R$ ${sale.totalPrice.replace('.', ',')}`}
            </section>
          </table>
        </div>
      )}
    </div>
  );
}
