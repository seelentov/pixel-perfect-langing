import { FC } from 'react'
import styles from './ListingGrid.module.scss'
import { ListingGridItem } from './ListingGridItem/ListingGridItem';

export interface IListingGridProps {
data: IService[]
}

export const ListingGrid: FC<IListingGridProps> = ({data}) => {
  return (
    <div className={styles.main}>
      {data.map(item => <ListingGridItem {...{...item}}/>)}
    </div>
  );
}