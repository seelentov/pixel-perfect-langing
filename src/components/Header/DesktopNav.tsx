'use client'

import { ROUTING } from "@/core/config/routing.config";
import Link from "next/link";
import { BrowserView } from "react-device-detect";
import styles from './Header.module.scss';
import cn from 'classnames'

export const DesktopNav = ({ serviceLinks }: { serviceLinks: MenuLink[] }) => {

  return (
    <BrowserView>
      <nav className={styles.navDesktop}>
        <ul className={styles.navDesktopList}>

          <li className={styles.navDesktopListItem}>
            <a href="/">Главная</a>
          </li>

          {serviceLinks.map(({ id, href: mainHref, name, sublist }) =>
            <li key={id} className={styles.navDesktopListItem}>
              <Link href={`/${mainHref}`}>{name}</Link>
              {
                sublist &&
                <ul className={styles.navDesktopSubList}>
                  {
                    sublist?.map(({ id, href, name }) =>
                      <li className={styles.navDesktopSubListItem} key={id}>
                        <Link href={`/${href}`}>{name}</Link>
                      </li>
                    )
                  }
                </ul>
              }
            </li>)}
          
          {ROUTING.menuLinks.map(({ id, href: mainHref, name, sublist }) =>
            <li key={id} className={styles.navDesktopListItem}>
              <Link href={`/${mainHref}`}>{name}</Link>
              {
                sublist &&
                <ul className={styles.navDesktopSubList}>
                  {
                    sublist?.map(({ id, href, name }) =>
                      <li className={styles.navDesktopSubListItem} key={id}>
                        <Link href={`/${href}`}>{name}</Link>
                      </li>
                    )
                  }
                </ul>
              }
            </li>)}
            <li className={cn(styles.navDesktopListItem, styles.specialLink)}>
            <Link href="/specials">Акции</Link>
          </li>
        </ul>
      </nav>
    </BrowserView>
  )
}