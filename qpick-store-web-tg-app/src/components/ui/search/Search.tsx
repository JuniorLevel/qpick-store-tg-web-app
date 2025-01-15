import { searchProductByTitle } from 'features/products/products.slice.ts';
import { useReduxState } from 'hooks/useReduxState';
import { useAppDispatch } from 'hooks/useStore.ts';
import { FC, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';

const Search: FC = (): JSX.Element => {
  const { searchProduct } = useReduxState();
  const [inputValue, setInputValue] = useState<string>(searchProduct);
  const dispatch = useAppDispatch();
  const clearInput = () => setInputValue('');
  useEffect(() => {
    dispatch(searchProductByTitle(inputValue));
  }, [dispatch, inputValue]);
  return (
    <div className="sm-max:order-4 sm-max:mt-4 sm-max:mx-auto relative max-w-[500px] w-full mx-2">
      <AiOutlineSearch className="absolute top-3 left-2" />
      <input
        value={searchProduct}
        className="bg-main-bg rounded-[30px] p-3 w-full text-[16px] pl-8 shadow-shadow placeholder:text-main-text focus:placeholder:text-[0px] border-red border-[1px]"
        type="text"
        placeholder="Введите название товара"
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <MdClear
        onClick={clearInput}
        className={`${
          !inputValue ? 'hidden' : 'absolute'
        }  top-3 right-3 hover:cursor-pointer`}
      />
    </div>
  );
};

export default Search;
