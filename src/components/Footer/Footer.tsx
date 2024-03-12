import { INFO } from '@/core/config/info.config';
import Image from 'next/image';
import { FC } from 'react';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from 'react-icons/ri';
import styles from './Footer.module.scss';



export interface IFooterProps {

}

export const Footer: FC<IFooterProps> = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <address className={styles.address}>

            </address>
            <div className={styles.social}>
              <a className={styles.socialItem} href={`tel:${INFO.PHONE}`}>
                <RiPhoneFill size={21} />
              </a>
              <a className={styles.socialItem} target='_blank' href={`https://wa.me/${INFO.PHONE}`}>
                <RiWhatsappFill size={21} />
              </a>
              <a className={styles.socialItem} target='_blank' href={`https://t.me/${INFO.PHONE}`}>
                <RiTelegramFill size={21} />
              </a>
            </div>
          </div>
          <a className={styles.center} href="/">
            <Image src={`/icon.svg`} alt={'Pixel Perfect'}
              priority
              className={styles.itemImageDeviceMobile}
              width={70}
              height={70}
              sizes="100vw"
              style={{ width: '100%' }}
            />
          </a>
          <div className={styles.right}>
            <div className={styles.legal}>
              <p>
                Комков Владислав Владимирович
              </p>
              <p>
                <a href="mailto:komkov222111@gmail.com">
                  komkov222111@gmail.com
                </a>
              </p>
              <p>
                ИНН: 745108164223
              </p>
            </div>
            <p className={styles.copyright}>© 2024 Pixel Perfect. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}