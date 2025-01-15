import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IProduct } from '../../../interfaces/interfaces.js';
import ButtonDelete from '../../ui/button-delete/ButtonDelete.js';
import CartCardItem from './cart-card-item/CartCardItem.js';
import CartCardPanel from './cart-card-panel/CartCardPanel.js';

interface ICartCardProps {
  product: IProduct;
}

const CartCard: FC<ICartCardProps> = ({ product }): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShow(!show);
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={3000}
      classNames="main-animation-scale"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className="sm:max-w-[320px] lg:max-w-[450px] lg:w-full relative rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4 mb-4"
      >
        <CartCardItem product={product} />
        <CartCardPanel product={product} />
        <ButtonDelete
          product={product}
          count={Number(localStorage.getItem(`count${product.id}`))}
        />
      </div>
    </CSSTransition>
  );
};

export default CartCard;
