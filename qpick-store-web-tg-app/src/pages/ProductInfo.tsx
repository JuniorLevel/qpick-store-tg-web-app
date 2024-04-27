import CardDetail from 'components/assortment/card/card-detail/CardDetail';
import Error from 'components/error/ErrorComponent.js';
import Layout from 'components/layout/Layout';
import Loader from 'components/loader/Loader';
import { getProductById } from 'features/products/products.slice.ts';
import { useReduxState } from 'hooks/useReduxState';
import { useAppDispatch } from 'hooks/useStore.ts';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo: FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useReduxState();

  useEffect(() => {
    if (!id) return;
    dispatch(getProductById(Number(id)));
  }, [id]);

  return (
    <Layout>
      {isLoading ? (
        <div className="sm-max:top-[20%] md:top-[25%] lg-min:top-[30%] left-[50%] absolute">
          <Loader />
        </div>
      ) : (
        <>{error ? <Error error={error} /> : <CardDetail />}</>
      )}
    </Layout>
  );
};

export default ProductInfo;
