import { FC } from 'react';
import styles from './Stages.module.scss';


export const StagesItem: FC<IAdvantages & { index: number }> = ({ title, text, index }) => {
  return (
    <li className={styles.item} style={{ marginLeft: `${(7 * index)}%` }}>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
}