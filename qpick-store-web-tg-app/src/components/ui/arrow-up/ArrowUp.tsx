import { FC, useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ArrowUp: FC = (): JSX.Element => {
  const [scroll, setScroll] = useState<number>(0);

  const currentScroll = () => {
    if (window.scrollY < 2500) setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', currentScroll);
    return () => window.removeEventListener('scroll', currentScroll);
  }, [scroll]);

  return (
    <button
      className={`fixed z-[99] left-5 bottom-5 rounded-[100%] ${
        scroll > 2000 ? 'block' : 'hidden'
      }`}
      onClick={() => {
        window.scroll({ top: 0, behavior: 'smooth' });
      }}
    >
      <BsFillArrowUpCircleFill className="w-[48px] h-[48px] hover:opacity-80" />
    </button>
  );
};

export default ArrowUp;
