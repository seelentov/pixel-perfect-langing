import { getServiceLinks } from '@/core/api/getServiceLinks';
import { INFO } from '@/core/config/info.config';
import { FC } from 'react';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from "react-icons/ri";
import { DesktopNav } from './DesktopNav';
import styles from './Header.module.scss';
import { MobileNav } from './MobileNav';
import { YMClick } from '../YM/YMClick';
import { social_links } from './header.config';

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
            {social_links.map((link, index) => <YMClick key={index} className={styles.socialItem} {...{ ...link }} />)}
          </div>
        </div>
      </div>
    </header>
  );
}




