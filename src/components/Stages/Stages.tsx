'use client'

import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './Stages.module.scss';
import { StagesItem } from './StagesItem';

export interface IStagesProps {
  data: IAdvantages[]
  header: string
}

export const Stages: FC<IStagesProps> = ({ data, header }) => {
  
  const [active, setActive] = useState<null | number>(0)

  return (
    <section className={styles.main}>
      <div className="container">
        <h2 className='text-header'>{header}</h2>
        <div className={styles.list}>
          {data.map((advantage, index) =>
            <div key={advantage.id} onClick={() => setActive(index)} className={cn(styles.item, index === active && styles.itemActive)} style={{ marginLeft: `${(7 * index)}%` }}>
              <StagesItem  {...{ ...advantage }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}