import { Call } from "@/components/Call/Call";
import { API_URL } from "@/core/config/api.config";
import { INFO } from "@/core/config/info.config";
import { Metadata } from "next";
import Image from 'next/image';
import styles from './page.module.scss';
import { Form } from "@/components/Form/Form";
import { HiddenData } from "@/components/UI/HiddenPhone/HiddenData";


export const metadata: Metadata = {
  title: "Контакты | Pixel Perfect",
  description: "Разработка мобильных и веб приложений для вашей компании",
  openGraph: {
    title: 'Контакты | Pixel Perfect',
    description: 'Разработка мобильных и веб приложений для вашей компании',
    url: API_URL,
    siteName: 'Pixel Perfect',
    images: [
      {
        url: '/favicon.png',
        width: 500,
        height: 500,
      },
    ],
    locale: 'ru',
    type: 'website',
  },

};


export default async function Contacts() {

  return (
    <div className={styles.main}>
      <div className="content container">

        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1>
              Контакты
            </h1>
            <address>
              <p>Комков Владислав Владимирович</p>
              <p><a href="mailto:komkov222111@gmail.com">komkov222111@gmail.com</a></p>
              <p><HiddenData href={`tel:${INFO.PHONE}`} text={INFO.PHONE}/></p>
              <p>ИНН: 745108164223</p>
            </address>
            <Form type="min"/>
          </div>
          <div className={styles.right}>
            <Image src={`/icon--black.svg`} alt={'Pixel Perfect'}
              priority
              width={450}
              height={450}
              sizes="100vw"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      <Call padding='none' type="w/out-form"/>
    </div >
  );
}
