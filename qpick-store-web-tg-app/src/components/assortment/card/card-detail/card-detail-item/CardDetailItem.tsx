import AddToCartBtn from 'components/ui/add-to-cart-btn/AddToCartBtn';
import { useImage } from 'hooks/useImage';
import { IProduct } from 'interfaces/interfaces';
import { FC } from 'react';
import ImageNotFound from '../../../../../../public/images/image-not-found.jpg';

interface ICardDetailItemProps {
  product: IProduct;
}

const CardDetailItem: FC<ICardDetailItemProps> = ({ product }): JSX.Element => {
  const { isLoadCompleteImage, imageSrc } = useImage(product);

  return (
    <div className="sm-max:block flex gap-4 mb-4">
      <div className="sm:max-w-full sm-max:mb-5 w-full h-full">
        <img
          src={!isLoadCompleteImage ? ImageNotFound : imageSrc}
          alt={`${product.title}-img`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" max-w-[700px] w-full flex flex-col justify-between">
        <div className="mb-3">
          <h3 className="font-bold mb-3 text-aqua-color-text">
            Описание товара
          </h3>
          <p className="text-[20px] italic">{product.description}</p>
        </div>
        <AddToCartBtn product={product} />
        <div className="sm-max:top-0 sm-max:right-4 absolute top-[-25px] right-[-20px]"></div>
      </div>
    </div>
  );
};

export default CardDetailItem;
