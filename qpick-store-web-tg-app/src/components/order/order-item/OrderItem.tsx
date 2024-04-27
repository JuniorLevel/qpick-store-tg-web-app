import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import OrderItemLeft from './order-item-left/OrderItemLeft';
import OrderItemRight from './order-item-right/OrderItemRight';

const OrderItem: FC = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const nodeRef = useRef<HTMLElement | null>(null);
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
      <section ref={nodeRef}>
        <div className="md-max:flex-col flex justify-between gap-5">
          <OrderItemLeft />
          <OrderItemRight />
        </div>
      </section>
    </CSSTransition>
  );
};

export default OrderItem;
