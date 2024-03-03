import { FC, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

export const Button: FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={styles.main} {...rest}>
      <noindex>
        <span className={styles.textHover}>
          <span>{children}</span>
        </span>
      </noindex>
      <span className={styles.text}>{children}</span>

    </button>
  );
}