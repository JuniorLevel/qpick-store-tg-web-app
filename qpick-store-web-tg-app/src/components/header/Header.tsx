import Search from 'components/ui/search/Search.js';
import { useTelegram } from 'hooks/useTelegram';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from 'utils/consts.ts';
import HeaderPanel from './header-panel/HeaderPanel';

const Header: FC = (): JSX.Element => {
  const { tg } = useTelegram();
  return (
    <header className="sm-max:flex-wrap sm-max:pb-0 flex flex-row-reverse justify-between items-center w-full py-6">
      {window.location.pathname === '/' ? (
        <div className="hover:text-[red]" onClick={() => tg.close()}>
          Выйти
        </div>
      ) : (
        <Link to={HOME_ROUTE}>
          <div className="hover:text-[red]">Главная</div>
        </Link>
      )}
      {window.location.pathname === '/' && <Search />}
      <HeaderPanel />
    </header>
  );
};

export default Header;
