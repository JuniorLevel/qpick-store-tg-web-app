import { FC, useCallback, useEffect, useState } from 'react';
import Select from 'react-select';

import { clearCartList } from 'features/products/products.slice.ts';
import { useReduxState } from 'hooks/useReduxState.ts';
import { useAppDispatch } from 'hooks/useStore.ts';
import { useTelegram } from 'hooks/useTelegram.ts';
import { ICitiesData } from 'interfaces/interfaces.ts';
import { validatePhone } from 'utils/validatePhone.ts';
import { cities } from '../order-item-select/data.ts';

const OrderItemForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cartList, totalPrice } = useReduxState();
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);

  const getValue = (city: string) =>
    city ? cities.find(item => item.value === city) : '';

  const { tg } = useTelegram();
  type onSendData = () => Promise<any>;
  const onSendData: onSendData = useCallback(async () => {
    const formData = {
      city,
      phone,
      street,
    };
    const orderList = cartList.map(value => ({
      productName: value.title,
      price: value.price,
      amount: localStorage.getItem(`count${value.id}`),
    }));
    const order = {
      totalPrice,
      orderList: [...orderList],
      formData,
    };
    dispatch(clearCartList([]));
    localStorage.clear();
    tg.sendData(JSON.stringify(order));
    return await fetch('http://localhost:8080/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(order),
    });
  }, [city, phone, street]);

  useEffect(() => {
    tg.MainButton.setParams({ text: 'Закончить оформление' });
  }, []);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    setIsValidPhone(validatePhone(phone));
  }, [phone]);

  useEffect(() => {
    if (!city || !phone || !street || !isValidPhone) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [city, phone, street]);

  return (
    <div className="flex gap-3 flex-wrap max-w-[600px]">
      <Select
        placeholder="Выберите город"
        className="sm-max:text-[12px] w-full text-[20px] text-select-color-text"
        options={cities}
        value={getValue(city)}
        onChange={newValue => setCity((newValue as ICitiesData).value)}
      />
      <label
        htmlFor="phone"
        className="sm-max:text-[14px] w-full text-[18px] font-[600]"
      >
        Номер получателя
      </label>
      <input
        id="phone"
        className="sm-max:text-[12px] h-[45px] w-full py-1 px-2 placeholder:text-main-text focus:placeholder:text-[0px] font-medium rounded-[15px] text-[16px] bg-block-color-bg border-[1px]"
        placeholder="+7 xxx xxx xx xx"
        required
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      {!isValidPhone && (
        <div className="text-[red] text-[12px]">
          Введите корректный номер телефона
        </div>
      )}
      <label
        htmlFor="street"
        className="sm-max:text-[14px] w-full text-[18px] font-[600]"
      >
        Улица
      </label>
      <input
        id="street"
        className="sm-max:text-[12px] h-[45px] w-full py-1 px-2 placeholder:text-main-text focus:placeholder:text-[0px] font-medium rounded-[15px] text-[16px] bg-block-color-bg border-[1px]"
        placeholder="Введите название улицы"
        maxLength={50}
        value={street}
        onChange={e => setStreet(e.target.value)}
      />
    </div>
  );
};
export default OrderItemForm;
