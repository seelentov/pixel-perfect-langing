'use client'

import { ROUTING } from "@/core/config/routing.config";
import Link from "next/link";
import styles from './Header.module.scss';



export const DesktopNav = () => {

  const isShow = window.innerWidth > 1200

  if (!isShow) {
    return
  }

  return (<nav className={styles.navDesktop}>
    <ul className={styles.navDesktopList}>
      {ROUTING.menuLinks.map(({ id, href: mainHref, name, sublist }) =>
        <li key={id} className={styles.navDesktopListItem}>
          <Link href={mainHref}>{name}</Link>
          {
            sublist &&
            <ul className={styles.navDesktopSubList}>
              {
                sublist?.map(({ id, href, name }) =>
                  <li className={styles.navDesktopSubListItem} key={id}>
                    <Link href={`${mainHref}/${href}`}>{name}</Link>
                  </li>
                )
              }
            </ul>
          }
        </li>)}
    </ul>
  </nav>)
}