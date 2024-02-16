'use client'

import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './Banner.module.scss';

export const BannerItem: FC<IBanner> = ({ header, desc, image, headerType, type, href }) => {
  return (
    <div className='container'>
      <div className={styles.item}>
        <div className={styles.itemText}>
          {headerType === 'h1' ? <h1 className='text-header'>{header}</h1> : <h2 className='text-header'>{header}</h2>}
          <p>{desc}</p>
        </div>
        <BannerItemPreview {...{ image, header, type, href }} />
      </div>
    </div>
  );
}

type IBannerItemPreviewProps = Omit<IBanner, 'desc' | 'id'>

const BannerItemPreview: FC<IBannerItemPreviewProps> = ({ image, header, type }) => {

  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true)

  const windowWidth = window.innerWidth

  const screenRef = useRef<any>(null)

  useEffect(() => {

    const scrollInterval = setInterval(() => {
      if (screenRef.current) {
        screenRef.current.scrollTop = screenRef.current.scrollTop + 1;
      }
    }, 10)

    if (!isAutoScroll) {
      clearInterval(scrollInterval)
    }

    return () => clearInterval(scrollInterval);

  }, [screenRef, isAutoScroll])

  if (type === 'mobile' || windowWidth <= 767) {
    return (
      <div className={styles.itemImageMobile}>
        <div
          style={{ cursor: `url('/scroll-cursor.svg'), auto` }}
          ref={screenRef}
          className={styles.itemImageScreenMobile}
          onMouseEnter={() => setIsAutoScroll(false)}
          onMouseLeave={windowWidth > 1023 ? () => setIsAutoScroll(true) : undefined}
        >
          <Image src={image} alt={header}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Image src={`/mobile.png`} alt={header}
          className={styles.itemImageDeviceMobile}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }}
        />
      </div>
    )
  }

  return (
    <div className={styles.itemImage}>
      <div
        style={{ cursor: `url('/scroll-cursor.svg'), auto` }}
        ref={screenRef}
        className={styles.itemImageScreen}
        onMouseEnter={() => setIsAutoScroll(false)}
        onMouseLeave={windowWidth > 1023 ? () => setIsAutoScroll(true) : undefined}
      >
        <Image src={image} alt={header}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <Image src={`/laptop.png`} alt={header}
        className={styles.itemImageLaptop}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}