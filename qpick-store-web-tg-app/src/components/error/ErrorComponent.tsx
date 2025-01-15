import { FC } from 'react';

interface IError {
  name?: string;
  message?: string;
}

interface IErrorComponentProps {
  error: IError;
}

const ErrorComponent: FC<IErrorComponentProps> = ({ error }): JSX.Element => {
  const reloadPage: React.MouseEventHandler = (): void => location.reload();

  return (
    <div className="sm-max:text-[20px] flex flex-col items-center justify-center h-[50vh] w-full">
      <div className="text-center">В ходе работы с сайтом возникла ошибка!</div>
      <div>Название ошибки: {error.name}</div>
      <div>Описание ошибки: {error.message}</div>
      <div>
        Попробуйте{' '}
        <button
          onClick={reloadPage}
          className="hover:text-hover-color hover:cursor-pointer"
        >
          перезагрузить страницу
        </button>{' '}
        или зайти позже
      </div>
    </div>
  );
};

export default ErrorComponent;
