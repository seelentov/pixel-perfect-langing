import { FC } from 'react'
import styles from './ListingGridItem.module.scss'

export interface IListingGridItemProps extends IService{

}

export const ListingGridItem: FC<IListingGridItemProps> = () => {
  return (
    <div className={styles.main}>
      
    </div>
  );
}