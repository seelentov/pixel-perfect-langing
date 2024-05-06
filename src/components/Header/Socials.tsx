'use client'

import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { YMClick } from '../YM/YMClick';
import { social_links } from './header.config';
import { ModalForm } from '../ModalForm/ModalForm';

export interface IHeaderProps {

}

export const Socials: FC<IHeaderProps> = () => {


    return (
        <>
            <div className={styles.social}>
                {social_links.map((link, index) => <YMClick key={index} className={styles.socialItem} {...{ ...link }} />)}
            </div>
        </>
    );
}




