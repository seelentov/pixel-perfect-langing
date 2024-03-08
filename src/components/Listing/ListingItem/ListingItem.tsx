import { DevicePreview } from '@/components/DevicePreview/DevicePreview';
import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Link from 'next/link';
import { FC } from 'react';
import styles from './ListingItem.module.scss';


export interface IListingItemProps extends IService {
  width: number
}

export const ListingItem: FC<IListingItemProps> = ({ id, header, description, href, desktopExample, mobileExample }) => {
  const image = desktopExample || mobileExample
  const imageType = desktopExample ? 'desktop' : 'mobile'

  return (
    <Link className={styles.main} href={href}>
      <DevicePreview image={getImageFromApiObject(image)} imageType={imageType} header={header} className={styles.image} />
      <div className={styles.text}>
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}


interface ListingItemImage {
  image: string
  imageType: string
  header: string
}


