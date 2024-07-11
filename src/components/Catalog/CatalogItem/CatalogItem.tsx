import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './CatalogItem.module.scss';

export const CatalogItem: FC<Omit<ICatalogItem, 'id'>> = ({ header, description, href, category, icon }) => {

  const url = category.data.attributes.href.includes(href) ? `/${category.data.attributes.href}` : `/${category.data.attributes.href}/${href}`

  return (
    <Link href={url}>
      <div className={styles.main}>
        <Image src={getImageFromApiObject(icon)} alt="Landing Page" width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }} />
        <h4>{header}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}