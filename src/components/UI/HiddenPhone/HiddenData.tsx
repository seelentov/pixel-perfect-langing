"use client"

import { FC, HTMLAttributes, useState } from 'react';
import styles from './HiddenData.module.scss';

export interface IButtonProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string
    hideText?: string
    text: string
}

export const HiddenData: FC<IButtonProps> = ({ href, hideText = "...показать", text, ...rest }) => {
    const [isHide, setIsHide] = useState<boolean>(true)

    const show = (e: any) => {
        e.preventDefault()
        setIsHide(false)
    }

    return (
        <>{
            isHide ? 
            <a href={href} className={styles.main} {...rest} onClick={show}>
                {text.slice(0, 5) + hideText}
            </a>
            :
            <a href={href} className={styles.main} {...rest}>
                {text}
            </a>
        }</>
    );
}