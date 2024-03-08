import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Image from 'next/image';
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
      <ListingItemImage image={getImageFromApiObject(image)} imageType={imageType} header={header} />
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


const ListingItemImage: FC<ListingItemImage> = ({ image, imageType, header }) => {
  return (
    <div className={styles.image}>
      {
        imageType === 'mobile' ?
          <div className={styles.itemImageMobile}>
            <div
              className={styles.itemImageScreenMobile}
            >
              <Image src={image} alt={header}
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <Image src={`/mobile.png`} alt={header}
              priority
              className={styles.itemImageDeviceMobile}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%' }}
            />
          </div> :

          <div className={styles.itemImage}>
            <div
              className={styles.itemImageScreen}
            >
              <Image src={image} alt={header}
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <Image src={`/laptop-2.png`} alt={header}
              priority
              className={styles.itemImageLaptop}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
      }
    </div>
  )
}