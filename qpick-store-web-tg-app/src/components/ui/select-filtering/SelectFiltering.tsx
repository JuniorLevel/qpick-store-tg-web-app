import { filterProducts } from 'features/products/products.slice.ts';
import { useReduxState } from 'hooks/useReduxState';
import { useAppDispatch } from 'hooks/useStore.ts';
import { FC, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
const SelectFiltering: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { productsList, productsCategories } = useReduxState();

  useEffect(() => {
    dispatch(filterProducts(productsList));
  }, [dispatch]);
  return (
    <div className="my-5 text-end">
      <Form.Select
        className="sm-max:max-w-[300px] sm-max:text-[15px] p-3 pl-5 rounded-[30px] text-[20px] bg-main-bg border-[1px]"
        onChange={e => {
          if (e.target.value.toLowerCase() === 'all') {
            dispatch(filterProducts(productsList));
          }
          if (e.target.value.toLowerCase() === 'expensive') {
            dispatch(
              filterProducts(
                [...productsList].sort((a, b) => b.price - a.price),
              ),
            );
          }
          if (e.target.value.toLowerCase() === 'cheap') {
            dispatch(
              filterProducts(
                [...productsList].sort((a, b) => a.price - b.price),
              ),
            );
          }
          productsCategories.forEach(category => {
            if (e.target.value.toLowerCase() === category.name.toLowerCase()) {
              dispatch(
                filterProducts(
                  productsList.filter(
                    item =>
                      item.category?.name.toLowerCase() ===
                      category.name.toLowerCase(),
                  ),
                ),
              );
            }
          });
        }}
      >
        <option value="all">Весь ассортимент</option>
        <option value="expensive">Сначала дорогие</option>
        <option value="cheap">Сначала дешёвые</option>
        {productsCategories.map(item => (
          <option
            key={item.id}
            value={item.name.toLowerCase()}
          >{`Товар из категории: ${item.name}`}</option>
        ))}
      </Form.Select>
    </div>
  );
};

export default SelectFiltering;
