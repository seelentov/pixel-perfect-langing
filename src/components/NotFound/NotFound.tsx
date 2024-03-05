import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../UI/Button/Button';
import styles from './NotFound.module.scss';

export interface INotFoundProps {

}

export const NotFound: FC<INotFoundProps> = () => {
  return (
    <div className={styles.main}>
      <h2>404</h2>
      <p>Not Found</p>
      <a href="/">
        <Button>
          На главную
        </Button>
      </a>
    </div>
  );
}