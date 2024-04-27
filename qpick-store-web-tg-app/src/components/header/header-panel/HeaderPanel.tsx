import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CART_ROUTE } from 'utils/consts.ts';
import CartBtn from '../../ui/cart-btn/CartBtn';

const HeaderPanel: FC = (): JSX.Element => {
  return (
    <nav>
      <div className="flex items-center gap-6 mr-2">
        <Link to={CART_ROUTE}>
          <CartBtn />
        </Link>
      </div>
    </nav>
  );
};

export default HeaderPanel;
