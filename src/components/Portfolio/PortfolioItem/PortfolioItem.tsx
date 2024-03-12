import { DevicePreview } from '@/components/DevicePreview/DevicePreview';
import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import { FC } from 'react';
import styles from './PortfolioItem.module.scss';

export interface IPortfolioItemProps extends IPortfolio {

}

export const PortfolioItem: FC<IPortfolioItemProps> = ({ exampleDesktop, exampleMobile, header, href }) => {

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