import { FC } from 'react';

interface IButtonSubmitProps {
  text: string;
}

const ButtonSubmit: FC<IButtonSubmitProps> = ({ text }): JSX.Element => {
  return (
    <button
      type="submit"
      className="sm-max:text-[12px] bg-button-color-bg text-main-text shadow-shadow mt-5 p-3 text-[15px] font-medium rounded-[15px] w-full hover:bg-main-text hover:text-button-color-bg transition ease delay-50"
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
