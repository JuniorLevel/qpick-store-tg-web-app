import ButtonAction from 'components/ui/button-action/ButtonAction';
import { addTotalPrice, subTotalPrice } from 'features/prices/prices.slice';
import { useAppDispatch } from 'hooks/useStore';
import { IProduct } from 'interfaces/interfaces';
import { FC, useEffect, useState } from 'react';

interface ICartCardPanelProps {
  product: IProduct;
}

const CartCardPanel: FC<ICartCardPanelProps> = ({ product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(
    Number(localStorage.getItem(`count${product.id}`)),
  );

  useEffect(() => {
    localStorage.setItem(`count${product.id}`, String(count));
  }, [count]);
  return (
    <div className="md-max:flex-col md-max:items-center flex justify-between">
      <div className="md-max:order-2 flex justify-between w-[200px]">
        <ButtonAction
          onClick={() => {
            if (count === 1) return;
            setCount(count - 1);
            dispatch(subTotalPrice(product.price));
          }}
          action="-"
        />
        <p className="text-[17px] my-auto">{count}</p>
        <ButtonAction
          onClick={() => {
            if (count === 100) return;
            setCount(count + 1);
            dispatch(addTotalPrice(product.price));
          }}
          action="+"
        />
      </div>
      <span className="text-sm font-semibold">{`${
        product.price * count
      }$`}</span>
    </div>
  );
};

export default CartCardPanel;
