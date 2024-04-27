import Button from 'components/ui/button/Button';
import EmptyItem from 'components/ui/empty-item/EmptyItem';
import Title from 'components/ui/title/Title';
import TotalAmount from 'components/ui/total-amount/TotalAmount';
import { useReduxState } from 'hooks/useReduxState';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { ORDER_ROUTE } from 'utils/consts.ts';
import CartCard from './cart-card/CartCard';

const CartItem: FC = (): JSX.Element => {
  const { cartList } = useReduxState();
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <section>
      <div ref={ref}>
        <Title title="Корзина" />
      </div>
      {cartList.length ? (
        <div className="sm-max:flex-col md-max:gap-5 lg:gap-[30px] flex justify-between gap-[120px]">
          <div className="sm:mx-auto sm:max-w-[320px] max-w-[610px] w-full">
            {cartList.map(product => (
              <CartCard key={product.id} product={product} />
            ))}
          </div>
          <div>
            <div
              className={`sm-max:mb-10 sm-max:w-full md:w-[300px] w-[350px] rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4 ${
                !inView ? 'sticky top-[15px]' : ''
              }`}
            >
              <TotalAmount />
              <Button text="Перейти к оформлению" path={ORDER_ROUTE} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyItem title="Корзина пуста" />
      )}
    </section>
  );
};

export default CartItem;
