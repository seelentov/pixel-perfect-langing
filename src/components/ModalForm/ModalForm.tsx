'use client'

import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import styles from './ModalForm.module.scss';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { Form } from '../Form/Form';


export interface IModalFormProps {
}

export const ModalForm: FC<IModalFormProps> = () => {


    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
            const html = document.querySelector('html');
            if (html) {
                html.style.overflow = 'visible'
            }
        }, 10000)
    }, [])



    useEffect(() => {
        const handleDocumentClick = (e: any) => {
            if (!e.target.closest(`.modal-form`)) {
                setIsOpen(false);
                const html = document.querySelector('html');
                if (html) {
                    html.style.overflow = 'scroll'
                }

            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={cn(styles.wrapper, isOpen && styles.open)}>
            <Form />
        </div>
    );
}