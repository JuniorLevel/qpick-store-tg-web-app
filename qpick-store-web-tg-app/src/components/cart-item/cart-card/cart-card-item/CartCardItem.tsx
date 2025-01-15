import { useImage } from 'hooks/useImage';
import { IProduct } from 'interfaces/interfaces';
import { FC } from 'react';
import ImageNotFound from '../../../../../public/images/image-not-found.jpg';

interface ICartCardItemProps {
  product: IProduct;
}

const CartCardItem: FC<ICartCardItemProps> = ({ product }): JSX.Element => {
  const { isLoadCompleteImage, imageSrc } = useImage(product);

  return (
    <div className="lg-max:flex-col flex gap-3 items-center mb-3">
      <div className="lg:max-w-[250px] lg:max-h-[250px] h-[200px] w-[200px]">
        <img
          src={!isLoadCompleteImage ? ImageNotFound : imageSrc}
          alt={`product${product.id}`}
          className="rounded-[30px] w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-bg-black text-[17px] font-extrabold">
          {product.title ? product.title : 'Some title product'}
        </p>
        <span className="mt-3 text-main-text text-[15px] font-semibold">
          {`${product.price}$`}
        </span>
      </div>
    </div>
  );
};

export default CartCardItem;
