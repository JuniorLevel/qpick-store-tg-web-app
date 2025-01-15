import { IProduct } from 'interfaces/interfaces.ts';
import { FC } from 'react';

interface IOrderItemListElemProps {
  item: IProduct;
}

const OrderItemListElem: FC<IOrderItemListElemProps> = ({
  item,
}): JSX.Element => {
  return (
    <li className="sm-max:text-[15px] flex justify-between items-center text-[18px] font-medium mb-5 last:mb-0">
      <span>{localStorage.getItem(`count${item.id}`)}x</span>
      <p className="flex-1 px-5 text-[16px] font-bold">{item.title}</p>
      <span>{`${
        item.price * Number(localStorage.getItem(`count${item.id}`))
      }$`}</span>
    </li>
  );
};

export default OrderItemListElem;
