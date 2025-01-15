import Card from 'components/assortment/card/Card';
import { useReduxState } from 'hooks/useReduxState';
import { IProduct } from 'interfaces/interfaces.ts';
import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface ICardListProps {
  products: IProduct[];
}

const CardList: FC<ICardListProps> = ({ products }): JSX.Element => {
  const { isLoading } = useReduxState();
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(!show);
  }, [isLoading]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={3000}
      classNames="main-animation-opacity"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className="sm-max:grid-cols-1 md:grid-cols-2 md-max:gap-5 lg:grid-cols-3 lg:gap-2 grid grid-cols-3 gap-5"
      >
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </CSSTransition>
  );
};

export default CardList;
