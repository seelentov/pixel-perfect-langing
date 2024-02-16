import { INFO } from '@/core/config/info.config';
import { FC } from 'react';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from "react-icons/ri";
import { DesktopNav } from './DesktopNav';
import styles from './Header.module.scss';
import { MobileNav } from './MobileNav';

export interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = () => {

  return (
    <header className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <DesktopNav />
            <MobileNav />
          </div>
          <div className={styles.social}>
            <a className={styles.socialItem} href={`tel:${INFO.PHONE}`}>
              <RiPhoneFill size={17} />
            </a>
            <a className={styles.socialItem} href={`https://api.whatsapp.com/send?phone=${INFO.PHONE}`}>
              <RiWhatsappFill size={17} />
            </a>
            <a className={styles.socialItem} href={`https://t.me/${INFO.PHONE}`}>
              <RiTelegramFill size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}




