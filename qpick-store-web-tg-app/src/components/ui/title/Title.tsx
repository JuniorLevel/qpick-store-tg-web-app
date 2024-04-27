import { FC } from 'react';

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }): JSX.Element => {
  return (
    <h1 className="sm-max:text-[20px] sm-max:mt-6 text-black text-[30px] font-semibold mb-3 text-title-color-text">
      {title}
    </h1>
  );
};

export default Title;
