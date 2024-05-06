'use client'

import styles from './Form.module.scss'
import { sendTelegramMessage } from '@/core/api/sendtelegramMessage';
import { Button } from '../UI/Button/Button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
interface IFormProps {
    type?: 'min' | 'default'
}

export const Form = ({ type = 'default' }) => {

    const pathname = usePathname()


    const [formData, setFormData] = useState({
        name: '',
        tel: '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const isSended = await sendTelegramMessage(formData, pathname)
        if (isSended) {
            setFormData({
                name: '',
                tel: '',
            })
        }
    };

    return (
        <form className={cn(styles.form, type === 'default' && styles.default)} onSubmit={handleSubmit}>
            {type === 'default' &&
                <>
                    <h2 className='text-header'>Закажите звонок</h2>
                    <p>..и свяжусь с Вами в ближайшее время</p>
                </>}
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
            />
            <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Ваш номер телефона"
            />
            <Button>
                Отправить
            </Button>
        </form>
    )
}