import { INFO } from '@/core/config/info.config';
import Image from 'next/image';
import { FC } from 'react';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from 'react-icons/ri';
import styles from './Footer.module.scss';
import { YMClick } from '../YM/YMClick';
import { social_links } from './footer.config';



export interface IFooterProps {

}

export const Footer: FC<IFooterProps> = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.social}>
              {social_links.map((link, index) => <YMClick key={index} className={styles.socialItem} {...{ ...link }} />)}
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
            <address className={styles.legal}>
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
            </address>
            <p className={styles.copyright}>© 2024 Pixel Perfect. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}