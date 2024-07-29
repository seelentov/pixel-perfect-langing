import { FC, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  dubleText?: string,
  disabled?: boolean
}

export const Button: FC<IButtonProps> = ({ children, dubleText="", disabled = false, ...rest }) => {
  return (
    <button className={styles.main} disabled={disabled} {...rest}>
      <noindex>
        <span className={styles.textHover}>
          <span>{children}</span>
        </span>
      </noindex>
      <span className={styles.text}>{dubleText}</span>

    </button>
  );
}