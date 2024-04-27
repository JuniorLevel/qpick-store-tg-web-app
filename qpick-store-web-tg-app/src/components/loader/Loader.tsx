import { FC } from 'react';
import styles from './Loader.module.scss';

const Loader: FC = (): JSX.Element => {
  return <div className={styles.loader}></div>;
};

export default Loader;
