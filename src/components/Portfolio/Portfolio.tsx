'use client'

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Portfolio.module.scss';
import { PortfolioItem } from './PortfolioItem/PortfolioItem';

import 'swiper/css';
import 'swiper/css/pagination';

export interface IPortfolioProps {
  data: IPortfolio[]
}

export const Portfolio: FC<IPortfolioProps> = ({ data }) => {
  return (

    <div className={styles.main}>
      <div className="container">
        <h2 className='text-header'>Примеры работ</h2>
        <Swiper
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 2,
            },
            1023: {
              slidesPerView: 3,
            },
          }}

        >
          {data.map(item => <SwiperSlide key={item.id}>
            <PortfolioItem {...{ ...item }} />
          </SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  );
}