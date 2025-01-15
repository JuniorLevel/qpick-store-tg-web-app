import { IProduct } from 'interfaces/interfaces';

export function useImage(product: IProduct) {
  const img = new Image();
  img.src = product.images.slice(0, 1)[0];
  return {
    isLoadCompleteImage: img.complete,
    imageSrc: img.src,
  };
}
