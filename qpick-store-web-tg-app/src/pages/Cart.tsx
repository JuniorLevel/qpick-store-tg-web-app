import CartItem from 'components/cart-item/CartItem';
import Layout from 'components/layout/Layout';
import { FC, useEffect } from 'react';

const Cart: FC = (): JSX.Element => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <CartItem />
    </Layout>
  );
};

export default Cart;
