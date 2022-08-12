import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SaleCardDetails from '../components/SaleCardDetails';
import { getSaleById } from '../services/Sale';

export default function OrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [render, setRender] = useState(false);

  const fetchSale = async () => {
    const saleData = await getSaleById(id);
    setSale(saleData.data);
    setRender(true);
  };

  useEffect(() => {
    fetchSale();
  }, []);

  return (
    <div>
      {render && (
        <div>
          <h1>Order details</h1>
          <p
            data-testid={ `customer_order_details__element-order-details
            -label-order-${id}` }
          >
            {`Pedido: ${id}`}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-nam"
          >
            {`Vendedor: ${sale.Seller.name}`}
          </p>
          <p data-testid="customer_order_details__element-order-details-label-order-date">
            {`Data: ${sale.saleDate}`}
          </p>
          <p
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {`Status: ${sale.status}`}
          </p>

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
          <p>{`Total price: ${sale.totalPrice}`}</p>
        </div>
      )}
    </div>
  );
}
