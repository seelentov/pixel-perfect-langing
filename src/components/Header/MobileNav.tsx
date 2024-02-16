'use client'

import { ROUTING } from "@/core/config/routing.config";
import cn from 'classnames';
import { Twirl as Hamburger } from 'hamburger-react';
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from './Header.module.scss';


type MenuLinkChild = {
  id: number;
  href: string;
  name: string;
}

type MenuLinkParent = MenuLinkChild & {
  sublist?: MenuLinkChild[];
}

type NavItems = {
  title: string,
  links: MenuLinkParent[]
}

const defaultNavItems = {
  title: 'Pixel Perfect',
  links: ROUTING.menuLinks
}

export const MobileNav = () => {

  const [isOpen, setOpen] = useState<string | null>(null)
  const isOpenBoolean = isOpen === 'navMobileMenuOpening' || isOpen === 'navMobileMenuOpen'
  const [isOpenSub, setOpenSub] = useState<string | null>(null)

  const [navItems, setNavItems] = useState<NavItems | null>(null)

  const isShow = window.innerWidth <= 1200

  if (!isShow) {
    return
  }

  useEffect(() => {
    const html = document.querySelector('html');

    if (!html || !html.style) {
      return
    }

    if (isOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'visible';
    }

  }, [isOpen]);


  const changeOpenState = (move: 'close' | 'open', setState: Dispatch<SetStateAction<string | null>>) => {
    if (move === 'open') {
      setState('navMobileMenuOpening')
      setTimeout(() => {
        setState('navMobileMenuOpen')
      }, 300)
    }

    if (move === 'close') {
      setState('navMobileMenuClosing')
      setTimeout(() => {
        setState(null)
      }, 300)
    }
  }



  const MobileNavSub = () => {


    const closeAll = () => {
      changeOpenState('close', setOpen)
      changeOpenState('close', setOpenSub)
    }

    return (
      <div className={cn(styles.navMobileMenuSub, isOpenSub && styles[isOpenSub])}>
        <div className={styles.navMobileMenuHeader}>
          <button className={styles.navMobileMenuBackBtn} onClick={() => changeOpenState('close', setOpenSub)}>
            <SlArrowLeft size={15} />
          </button>
          <span>{navItems && navItems.title}</span>
        </div>
        <hr />
        <ul className={styles.navMobileList}>
          {navItems && navItems.links.map(({ id, href: mainHref, name }) =>
            <li key={id} className={styles.navMobileListItem} onClick={() => closeAll()}>
              <Link href={mainHref}>{name}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }


  const openNavSub = (navItems: NavItems) => {
    setNavItems(navItems)
    changeOpenState('open', setOpenSub)
  }

  return (
    <nav className={styles.navMobile}>
      <div className={cn(styles.navMobileBG, isOpenBoolean && styles.navMobileBGOpen)}></div>
      <button className={styles.navMobileBtnMenu} onClick={() => changeOpenState('open', setOpen)}>
        <Hamburger toggled={isOpen === 'open'} size={25} />
      </button>
      <div className={cn(styles.navMobileMenu, isOpen && styles[isOpen])}>
        <div className={styles.navMobileMenuHeader}>
          <button className={styles.navMobileMenuBackBtn} onClick={() => changeOpenState('close', setOpen)}>
            <SlArrowLeft size={15} />
          </button>
          <span>{defaultNavItems.title}</span>
        </div>
        <hr />
        <ul className={styles.navMobileList}>
          {defaultNavItems.links.map(({ id, href: mainHref, name, sublist }) => {
            if (!sublist) {
              return <li key={id} className={styles.navMobileListItem} onClick={() => changeOpenState('close', setOpen)}>
                <Link href={mainHref}>{name}</Link>
              </li>
            }
            return <li key={id} className={styles.navMobileListItem}>
              <button onClick={() => openNavSub({ title: name, links: sublist })}>
                {name} <SlArrowRight size={10} />
              </button>
            </li>
          })}
        </ul>
      </div>
      <MobileNavSub />
    </nav>
  )
}