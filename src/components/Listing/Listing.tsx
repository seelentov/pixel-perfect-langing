import { FC } from 'react';
import styles from './Listing.module.scss';
import { ListingItem } from './ListingItem/ListingItem';

export interface IListingProps {
  data: IService[]
}

export const Listing: FC<IListingProps> = ({ data }) => {
  return (
    <div className={styles.main}>
      {data.map(item => <ListingItem key={item.id} {...{ ...item }} width={100/data.length}/>)}
    </div>
  );
}