import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './CatalogItem.module.scss';

export const CatalogItem: FC<Omit<ICatalogItem, 'id'>> = ({ header, description, href, section, icon }) => {
  return (
    <Link href={`/${section}/${href}`}>
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