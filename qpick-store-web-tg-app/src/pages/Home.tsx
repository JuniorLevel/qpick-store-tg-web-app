import Assortment from 'components/assortment/Assortment';
import ErrorComponent from 'components/error/ErrorComponent';
import Layout from 'components/layout/Layout';
import { cancelTotalPrice } from 'features/prices/prices.slice.ts';
import {
  getProducts,
  getProductsCategories,
} from 'features/products/products.slice.ts';
import { useReduxState } from 'hooks/useReduxState';
import { useAppDispatch } from 'hooks/useStore.ts';
import { FC, useEffect } from 'react';

const Home: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cartList, error } = useReduxState();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!cartList.length) {
      dispatch(cancelTotalPrice(0));
      localStorage.removeItem('selectReceiving');
    }
  }, [cartList]);

  return (
    <Layout>{error ? <ErrorComponent error={error} /> : <Assortment />}</Layout>
  );
};

export default Home;
