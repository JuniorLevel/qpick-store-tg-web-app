import { useReduxState } from 'hooks/useReduxState';
import { FC } from 'react';
import { BsCart2 } from 'react-icons/bs';

const CartBtn: FC = (): JSX.Element => {
  const { cartList } = useReduxState();

  return (
    <div className="flex items-center relative w-[30px] h-[30px]">
      <BsCart2 className="fill-main-text hover:fill-hover-color transition ease-in-out duration-0 hover:duration-500" />
      {cartList.length ? (
        <div className="flex justify-center items-center absolute top-[-20px] right-[-20px] w-[25px] h-[25px] p-[10px] rounded-[50%] bg-block-color border-[1px] text-main-text text-[12px] font-medium">
          {cartList.length}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartBtn;
