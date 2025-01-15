import { FC } from 'react';

interface IOrderTitleProps {
  title: string;
}

const OrderTitle: FC<IOrderTitleProps> = ({ title }): JSX.Element => {
  return (
    <h2 className="sm-max:text-[15px] mb-3 text-[20px] font-semibold">
      {title}
    </h2>
  );
};

export default OrderTitle;
