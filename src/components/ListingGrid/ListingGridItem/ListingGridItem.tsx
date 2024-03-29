import { DevicePreview } from '@/components/DevicePreview/DevicePreview';
import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import { FC } from 'react';
import styles from './ListingGridItem.module.scss';

export interface IListingGridItemProps extends IPortfolio {

}

export const ListingGridItem: FC<IListingGridItemProps> = ({ header, href, exampleDesktop, exampleMobile }) => {
  const image = exampleDesktop.data ? exampleDesktop : exampleMobile
  const imageType = exampleDesktop.data ? 'desktop' : 'mobile'



  return (
    <a className={styles.main} href={href} target='_blank'>
      <DevicePreview image={getImageFromApiObject(image)} imageType={imageType} header={header} className={styles.image} />
      <hr className="hr"/>
      <p>
        {header}
      </p>
    </a>
  );
}