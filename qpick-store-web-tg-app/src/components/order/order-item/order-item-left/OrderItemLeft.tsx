import { FC } from 'react';
import OrderForm from '../order-item-form/OrderItemForm';

const OrderItemLeft: FC = (): JSX.Element => {
  return (
    <div className="md-max:mx-auto max-w-[600px] rounded-[30px] shadow-shadow py-4 px-8 w-full h-full bg-block-color-bg border-[1px]">
      <OrderForm />
    </div>
  );
};

export default OrderItemLeft;
