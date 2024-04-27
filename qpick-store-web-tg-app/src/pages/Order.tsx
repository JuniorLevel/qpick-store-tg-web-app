import Layout from 'components/layout/Layout';
import OrderItem from 'components/order/order-item/OrderItem';
import Title from 'components/ui/title/Title';
import { FC } from 'react';

const Order: FC = (): JSX.Element => {
  return (
    <Layout>
      <Title title="Оформление заказа" />
      <OrderItem />
    </Layout>
  );
};

export default Order;
