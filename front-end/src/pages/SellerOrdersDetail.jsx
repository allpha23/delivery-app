import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClientNavegation from '../components/ClientNavegation';
import SellerCardDetail from '../components/SellerCardDetail';
import { getSaleById, update } from '../services/Sale';
import formatDate from '../components/formatDate';

const statusTest = 'seller_order_details__element-order-details-label-delivery-status';

export default function SellerOrdersDetail() {
  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [render, setRender] = useState(false);
  const [prepere, setPrepere] = useState(false);
  const [transit, setTransit] = useState(true);

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
      {render && (
        <div>
          <ClientNavegation />

          <h1>Detalho do Pedido</h1>
          <p
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {`Pedido: ${id}`}
          </p>
          <p data-testid="seller_order_details__element-order-details-label-order-date">
            {formatDate(sale.saleDate)}
          </p>
          <p
            data-testid={ statusTest }
          >
            {sale.status}
          </p>
          <button
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            value="Preparando"
            onClick={ updateStatus }
            disabled={ prepere }
          >
            Preparar Pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            value="Em Trânsito"
            onClick={ updateStatus }
            disabled={ transit }
          >
            Saiu para entrega
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
                <SellerCardDetail
                  key={ p.id }
                  item={ i + 1 }
                  quantity={ p.salesProduct.quantity }
                  price={ p.price }
                  name={ p.name }
                />
              ))}
            </tbody>
          </table>
          <p data-testid="seller_order_details__element-order-total-price">
            {sale.totalPrice.replace('.', ',')}
          </p>
        </div>
      )}
    </div>
  );
}
