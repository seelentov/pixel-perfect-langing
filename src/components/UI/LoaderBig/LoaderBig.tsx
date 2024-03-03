import { FC } from 'react'
import styles from './LoaderBig.module.scss'

export interface ILoaderBigProps {

}

export const LoaderBig: FC<ILoaderBigProps> = () => {
  return (
    <div className={styles.main}>
      <span className={styles.loader}></span>
    </div>
  );
}