import { FC } from 'react';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import styles from './CatalogTab.module.scss';

export interface ICatalogTabProps {
  data: ICatalogItem[]
}



export const CatalogTab: FC<ICatalogTabProps> = ({ data }) => {

  return (
    <div className={styles.main}>
      {data.map(item => <CatalogItem key={item.id} {...{ ...item }} />)}
    </div>
  );
}