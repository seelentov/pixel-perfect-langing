import { FC } from 'react';
import styles from './Stages.module.scss';
import { StagesItem } from './StagesItem';

export interface IStagesProps {
  data: IAdvantages[]
  header: string
}

export const Stages: FC<IStagesProps> = ({ data, header }) => {
  return (
    <section className={styles.main}>
      <div className="container">
        <h2 className='text-header'>{header}</h2>
        <ul className={styles.list}>
          {data.map((advantage, index) =>
            <StagesItem key={advantage.id} index={index} {...{ ...advantage }} />
          )}
        </ul>
      </div>
    </section>
  );
}