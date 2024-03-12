import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Advantages.module.scss';


export interface IAdvantagesProps {
  advantages: IAdvantages[]
}

export const Advantages: FC<IAdvantagesProps> = ({ advantages }) => {
  return (
    <div className={styles.main}>
      <div className="container">
        <h2 className='text-header'>Преимущества</h2>
        <div className={styles.wrapper}>
          {advantages.map(advantage => <div key={advantage.id} className={styles.item}>
            <Image
              src={getImageFromApiObject(advantage.icon)}
              alt={advantage.header}
              priority
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <h2>{advantage.header}</h2>
            <p>{advantage.description}</p>
          </div>)}
        </div>
      </div>
    </div>
  );
}