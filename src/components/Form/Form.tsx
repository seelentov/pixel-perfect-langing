'use client'

import styles from './Form.module.scss'
import { sendTelegramMessage } from '@/core/api/sendtelegramMessage';
import { Button } from '../UI/Button/Button';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { YMClick } from '../YM/YMClick';
import ReCAPTCHA from "react-google-recaptcha";
import { ENV } from '@/core/env';

interface IFormProps {
    type?: 'min' | 'default'
}

export const Form = ({ type = 'default' }) => {

    const pathname = usePathname()
    
    const [token, setToken] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
    });

    const handleChange = async (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptcha = async () => {
        if (!token || token === "") {
            alert("Пройдите проверку ReCaptcha");
            return false;
          }

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...formData, token }),
            });
      
            if (response.ok) {
              console.log("Form submitted successfully");
            } else {
              console.error("Error submitting form");
            }

            return true;

          } catch (error) {
            console.error("Error submitting form", error);
          }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(!await handleCaptcha()){
            return;
        }

        const isSended = await sendTelegramMessage(formData, pathname)

        if (isSended) {
            setFormData({
                name: '',
                tel: '',
            })
        }
    };

    return (
        <form className={cn(styles.form, type === 'default' && styles.default) + " modal-form"}>
            {type === 'default' &&
                <>
                    <h2 className='text-header'>Закажите звонок</h2>
                    <p>..и я свяжусь с Вами в ближайшее время</p>
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
            {ENV.RECAPTCHA_PUBLIC_KEY && <ReCAPTCHA
        sitekey={ENV.RECAPTCHA_PUBLIC_KEY}
        onChange={(token: any) => setToken(token)}
      />}
            

            <Button dubleText='Отправить' onClick={handleSubmit}>
                <YMClick child="Отправить" name="form_action" metrik_id={96723379} styleNest="display: inline" />
            </Button>
        </form>
    )
}