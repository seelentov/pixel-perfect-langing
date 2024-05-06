import { getServiceLinks } from '@/core/api/getServiceLinks';
import { FC, useState } from 'react';
import { DesktopNav } from './DesktopNav';
import styles from './Header.module.scss';
import { MobileNav } from './MobileNav';
import { Socials } from './Socials';

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
          <Socials/>
        </div>
      </div>
    </header>
  );
}




