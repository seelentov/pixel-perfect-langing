'use client'

import { FC, useState } from 'react';
import { YMClick } from '../YM/YMClick';
import styles from './Call.module.scss';
import { links } from './call.config';
import { ModalForm } from '../ModalForm/ModalForm';
import { Form } from '../Form/Form';

export interface ICallProps {
  padding?: 'top' | 'bottom' | 'both' | 'none'
  type?: 'default' | 'w/out-form'
}

export const Call: FC<ICallProps> = ({ padding = 'both', type = 'default' }) => {

  const paddingProp = {
    paddingTop: padding === 'top' || padding === 'both' ? '60px' : '0px',
    paddingBottom: padding === 'bottom' || padding === 'both' ? '60px' : '0px'
  }

  return (
    <div className={styles.main} style={paddingProp}>

      <div className={styles.social}>
        {
          type === 'default' ?
            <>
              {links.slice(0, links.length - 1).map((link, index) => <YMClick key={index} className={styles.socialItem} {...{ ...link }} />)}
              <div className={styles.socialItem} style={{ display: 'flex', justifyContent: 'center', height: 'auto' }}>
                <Form />
              </div>

            </> :
            links.map((link, index) => <YMClick key={index} className={styles.socialItem} {...{ ...link }} />)
        }
        { }

      </div>
    </div>
  );
}