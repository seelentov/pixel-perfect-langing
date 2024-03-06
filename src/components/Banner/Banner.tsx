'use client'

import { FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Banner.module.scss';
import { BannerItem } from './BannerItem';

import 'swiper/css';
import 'swiper/css/pagination';

export interface IBannerProps {
  data: IBanner[]
}

export const Banner: FC<IBannerProps> = ({ data }) => {

  return (
    <section className={styles.main}>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        modules={[Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {data.map((bannerItem, index) => {
          return (
            <SwiperSlide key={bannerItem.id}><BannerItem {...{ ...bannerItem }} pos={index === 0 ? 'first' : index === data.length - 1 ? 'last' : false}/></SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}