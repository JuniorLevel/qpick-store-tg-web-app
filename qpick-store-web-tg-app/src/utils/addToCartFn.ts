import { addTotalPrice } from 'features/prices/prices.slice';
import { addToCart } from 'features/products/products.slice';
import { IProduct } from 'interfaces/interfaces';

export function addToCartFn(
  dispatch: (a: unknown) => void,
  isCart: boolean,
  setIsCart: (a: boolean) => void,
  product: IProduct,
) {
  if (!isCart) {
    dispatch(addToCart(product));
    dispatch(addTotalPrice(product.price));
    localStorage.setItem(`count${product.id}`, String(1));
    localStorage.setItem(`isCartProduct${product.id}id`, String(true));
    setIsCart(Boolean(localStorage.getItem(`isCartProduct${product.id}id`)));
  }
}
