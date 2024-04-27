import styles from 'components/assortment/card/Card.module.scss';
import { useAppDispatch } from 'hooks/useStore.ts';
import { IProduct } from 'interfaces/interfaces.ts';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCartFn } from 'utils/addToCartFn';
import { CART_ROUTE } from 'utils/consts.ts';

interface IAddToCartBtnProps {
  product: IProduct;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isCart, setIsCart] = useState<boolean>(
    Boolean(localStorage.getItem(`isCartProduct${product.id}id`)),
  );

  return (
    <button
      className={isCart ? styles.card__btnCartClicked : styles.card__btnCart}
      onClick={() => {
        addToCartFn(dispatch, isCart, setIsCart, product);
      }}
    >
      {isCart ? <Link to={CART_ROUTE}>Перейти в корзину</Link> : 'В корзину'}
    </button>
  );
};

export default AddToCartBtn;
