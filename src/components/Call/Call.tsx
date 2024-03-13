'use client'

import { FC } from 'react';
import { YMClick } from '../YM/YMClick';
import styles from './Call.module.scss';
import { links } from './call.config';

export interface ICallProps {
  padding?: 'top' | 'bottom' | 'both' | 'none'
}

export const Call: FC<ICallProps> = ({ padding = 'both' }) => {

  const paddingProp = {
    paddingTop: padding === 'top' || padding === 'both' ? '60px' : '0px',
    paddingBottom: padding === 'bottom' || padding === 'both' ? '60px' : '0px'
  }

  return (
    <div className={styles.main} style={paddingProp}>

      <div className={styles.social}>
        {links.map((link, index) => <YMClick key={index} className={styles.socialItem} {...{ ...link }} />)}
      </div>
    </div>
  );
}