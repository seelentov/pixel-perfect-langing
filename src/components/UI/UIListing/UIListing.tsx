import { FC, HTMLAttributes } from 'react';
import styles from './UIListing.module.scss';
import { IUIListingItemProps, UIListingItem } from './UIListingItem';

export interface IUIListingProps {
    items: IUIListingItemProps[]
    headerType?: "h3" | "h2"
}

export const UIListing: FC<IUIListingProps> = ({ items, headerType = "h2" }) => {
  return (
    <div className={styles.list}>
        {items.map(item => <UIListingItem headerType={headerType} key={item.slug} {...{...item}}/>)}
    </div>
  );
}