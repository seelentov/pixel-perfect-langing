import { getServiceLinks } from '@/core/api/getServiceLinks';
import { INFO } from '@/core/config/info.config';
import { FC } from 'react';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from "react-icons/ri";
import { DesktopNav } from './DesktopNav';
import styles from './Header.module.scss';
import { MobileNav } from './MobileNav';

export interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = async () => {


  const serviceLinks = await getServiceLinks()

  return (
    <header className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <DesktopNav serviceLinks={serviceLinks} />
            <MobileNav serviceLinks={serviceLinks} />
          </div>
          <div className={styles.social}>
            <a className={styles.socialItem} href={`tel:${INFO.PHONE}`}>
              <RiPhoneFill size={17} />
            </a>
            <a className={styles.socialItem} target='_blank' href={`https://wa.me/${INFO.PHONE}`}>
              <RiWhatsappFill size={17} />
            </a>
            <a className={styles.socialItem} target='_blank' href={`https://t.me/${INFO.PHONE}`}>
              <RiTelegramFill size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}




