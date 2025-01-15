import { useTelegram } from 'hooks/useTelegram';
import Cart from 'pages/Cart';
import Home from 'pages/Home';
import Order from 'pages/Order';
import ProductInfo from 'pages/ProductInfo';
import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CART_ROUTE,
  HOME_ROUTE,
  ORDER_ROUTE,
  PRODUCT_ROUTE,
} from 'utils/consts.ts';

const AppRouter: FC = (): JSX.Element => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />}></Route>
      <Route path={CART_ROUTE} element={<Cart />}></Route>
      <Route path={ORDER_ROUTE} element={<Order />}></Route>
      <Route path={PRODUCT_ROUTE + '/:id'} element={<ProductInfo />}></Route>
    </Routes>
  );
};

export default AppRouter;
