import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClientNavegation from '../components/ClientNavegation';
import SaleCardDetails from '../components/SaleCardDetails';
import { getSaleById, update } from '../services/Sale';
import formatDate from '../components/formatDate';

const statusTest = 'customer_order_details__element-order-details-label-delivery-status';

export default function OrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [render, setRender] = useState(false);
  const [check, setCheck] = useState(true);

  const fetchSale = async () => {
    const saleData = await getSaleById(id);
    setSale(saleData.data);
    setRender(true);
    if (saleData.data.status === 'Em Trânsito') setCheck(false);
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
      {render && (
        <div>
          <ClientNavegation />

          <h1>Detalho do Pedido</h1>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`Pedido: ${id}`}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`Vendedor: ${sale.Seller.name}`}
          </p>
          <p data-testid="customer_order_details__element-order-details-label-order-date">
            {formatDate(sale.saleDate)}
          </p>
          <p
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

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub-total</th>
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
          </table>
          <p data-testid="customer_order_details__element-order-total-price">
            {sale.totalPrice.replace('.', ',')}
          </p>
        </div>
      )}
    </div>
  );
}
