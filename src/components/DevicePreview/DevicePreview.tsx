import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import styles from './DevicePreview.module.scss';


export interface IDevicePreviewProps extends HTMLAttributes<HTMLDivElement> {
  imageType: 'mobile' | 'desktop'
  image: string,
  header: string
}

export const DevicePreview: FC<IDevicePreviewProps> = ({ imageType, image, header, ...rest }) => {
  return (
    <div {...rest}>
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