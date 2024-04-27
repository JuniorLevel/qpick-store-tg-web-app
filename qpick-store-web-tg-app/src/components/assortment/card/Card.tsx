import AddToCartBtn from 'components/ui/add-to-cart-btn/AddToCartBtn';
// import AddToFavoriteBtn from 'components/ui/add-to-favorite-btn/AddToFavoriteBtn';
import { useImage } from 'hooks/useImage';
import { IProduct } from 'interfaces/interfaces.ts';
import { FC } from 'react';
import { FiStar } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'utils/consts.ts';
import styles from './Card.module.scss';
import ImageNotFound from '/images/image-not-found.jpg';

interface ICardProps {
  product: IProduct;
}

const Card: FC<ICardProps> = ({ product }): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { isLoadCompleteImage, imageSrc } = useImage(product);

  return (
    <article
      className={`sm:w-full lg:max-w-[320px] relative rounded-[30px] bg-card-bg shadow-shadow border-[3px] border-card-border-color hover:border-main-text ${styles.card}`}
    >
      <div className="p-5">
        <Link to={PRODUCT_ROUTE + `/${product.id}`}>
          <div
            className="mb-5 md:h-[230px] lg:h-[200px] xl:h-[250px] 2xl:h-[278px]"
            ref={ref}
          >
            {inView ? (
              <img
                className="w-full h-full object-cover"
                src={!isLoadCompleteImage ? ImageNotFound : imageSrc}
                alt={`product${product.id}`}
              />
            ) : (
              <div className="bg-[grey] opacity-20 h-full w-full" />
            )}
          </div>
          <div className="text-[20px] mb-4 text-center">
            <h3 className="text-black font-bold mb-3 truncate text-main-text">
              {product.title ? product.title : 'Some title product'}
            </h3>
            <p className="mb-3 text-aqua-color-text">
              {product.category?.name}
            </p>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <span>4.5</span> <FiStar color="rgb(255, 196, 0)" />
              </div>
              <span>{product.price}$</span>
            </div>
          </div>
        </Link>
        <AddToCartBtn product={product} />
        {/* <AddToFavoriteBtn product={product} /> */}
      </div>
    </article>
  );
};

export default Card;
