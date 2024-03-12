import { INFO } from '@/core/config/info.config';
import { FC } from 'react';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from 'react-icons/ri';
import styles from './Call.module.scss';

export interface ICallProps {
padding?: 'top' | 'bottom' | 'both' | 'none'
}

export const Call: FC<ICallProps> = ({padding = 'both'}) => {

  const paddingProp = {
    paddingTop: padding === 'top' || padding === 'both' ? '60px' : '0px',
    paddingBottom: padding === 'bottom' || padding === 'both' ? '60px' : '0px'
  }

  return (
    <div className={styles.main} style={paddingProp}>
      <div className={styles.social}>
        <a className={styles.socialItem} target='_blank' href={`https://wa.me/${INFO.PHONE}`}>
          <RiWhatsappFill size={120} />
          <p>wa.me/{INFO.PHONE}</p>
        </a>
        <a className={styles.socialItem} href={`https://t.me/${INFO.PHONE}`} target='_blank'>
          <RiTelegramFill size={120} />
          <p>t.me/{INFO.PHONE}</p>
        </a>
        <a className={styles.socialItem} href={`tel:${INFO.PHONE}`}>
          <RiPhoneFill size={120} />
          <p>{INFO.PHONE}</p>
        </a>
      </div>
    </div>
  );
}