import { useReduxState } from 'hooks/useReduxState';
import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Title from '../../../ui/title/Title';
import styles from './../Card.module.scss';
import CardDetailInfo from './card-detail-info/CardDetailInfo';
import CardDetailItem from './card-detail-item/CardDetailItem';

const CardDetail: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const { isLoading, product } = useReduxState();

  useEffect(() => {
    setShow(!show);
  }, [isLoading]);

  if (!product) return;

  return (
    <section>
      <Title title="Страница товара" />
      <CSSTransition
        nodeRef={nodeRef}
        in={show}
        classNames="main-animation-scale"
        timeout={3000}
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={`${styles.card} relative rounded-[30px] shadow-shadow w-full py-4 px-8 mb-[25px] border-[1px] bg-block-color-bg`}
        >
          <CardDetailItem product={product} />
          <CardDetailInfo product={product} />
        </div>
      </CSSTransition>
    </section>
  );
};

export default CardDetail;
