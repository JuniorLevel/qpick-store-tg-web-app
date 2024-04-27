import { useReduxState } from 'hooks/useReduxState';
import { FC } from 'react';
import OrderListItem from './order-item-list-elem/OrderItemListElem';
const OrderItemList: FC = (): JSX.Element => {
  const { cartList } = useReduxState();
  return (
    <ul className="mb-5">
      {cartList.map(item => (
        <OrderListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default OrderItemList;
