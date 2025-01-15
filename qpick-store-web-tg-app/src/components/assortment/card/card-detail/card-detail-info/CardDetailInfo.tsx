import { IProduct } from 'interfaces/interfaces';
import { FC } from 'react';

interface ICardDetailnfoProps {
  product: IProduct;
}

const CardDetailInfo: FC<ICardDetailnfoProps> = ({ product }): JSX.Element => {
  return (
    <div className="sm-max:flex-col sm-max:gap-4 flex justify-between font-bold">
      <div>
        <p className="sm-max:mb-4 text-aqua-color-text">Название товара:</p>
        <p className="sm-max:text-[20px] italic">
          {product.title ? product.title : 'Some title product'}
        </p>
      </div>
      <span className="italic text-aqua-color-text">
        Цена: <span className="text-main-text">{`${product.price}$`}</span>
      </span>
    </div>
  );
};

export default CardDetailInfo;
