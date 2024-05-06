import { FC, HTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {

}

export const Input: FC<IInputProps> = ({ children, ...rest }) => {
  return (
    <input className={styles.main} {...rest}/>
  );
}