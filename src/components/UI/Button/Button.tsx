import { FC, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  dubleText?: string
}

export const Button: FC<IButtonProps> = ({ children, dubleText="", ...rest }) => {
  return (
    <button className={styles.main} {...rest}>
      <noindex>
        <span className={styles.textHover}>
          <span>{children}</span>
        </span>
      </noindex>
      <span className={styles.text}>{dubleText}</span>

    </button>
  );
}