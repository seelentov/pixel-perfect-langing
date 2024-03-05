import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Link from 'next/link';
import { FC } from 'react';
import styles from './CatalogItem.module.scss';
import Image from 'next/image';

export const CatalogItem: FC<Omit<ICatalogItem, 'id'>> = ({ header, description, href, section, icon }) => {
  return (
    <Link href={`/${section}/${href}`}>
      <div className={styles.main}>
        <Image src={getImageFromApiObject(icon)} alt="Landing Page" />
        <h4>{header}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}