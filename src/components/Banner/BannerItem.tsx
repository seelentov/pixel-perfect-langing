'use client'

import { getImageFromApiObject } from '@/core/utils/api/getImageFromApiObject';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import styles from './Banner.module.scss';


export const BannerItem: FC<Omit<IBanner, 'id'> & { pos?: 'last' | 'first' | false }> = ({ header, headerType, pos, description, image, type, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.itemText}>
              {headerType === 'h1' ? <h1 className='text-header'>{header}</h1> : <h2 className='text-header'>{header}</h2>}
              <p>{description}</p>
            </div>
            <BannerItemPreview
              image={getImageFromApiObject(image)}
              header={header}
              type={type}
              pos={pos} />
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.itemText}>
          {headerType === 'h1' ? <h1 className='text-header'>{header}</h1> : <h2 className='text-header'>{header}</h2>}
          <p>{description}</p>
        </div>
        <BannerItemPreview
          image={getImageFromApiObject(image)}
          header={header}
          type={type}
          pos={pos} />
      </div>
    </div>
  );

}

type IBannerItemPreviewProps = {
  header: string
  image: string
  type: 'laptopLeft' | 'mobile' | 'laptopRight'
} & { pos?: 'last' | 'first' | false }

const BannerItemPreview: FC<IBannerItemPreviewProps> = ({ image, header, type, pos }) => {

  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true)
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

  if (type === 'mobile') {
    return (
      <div className={styles.itemImageMobile}>
        <div
          style={{ cursor: `url('/scroll-cursor.svg'), auto` }}
          ref={screenRef}
          className={styles.itemImageScreenMobile}
          onMouseEnter={() => setIsAutoScroll(false)}
        >
          <Image src={image} alt={header}
            priority
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Image src={`/mobile.png`} alt={header}
          priority
          className={styles.itemImageDeviceMobile}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }}
        />
      </div>
    )
  }

  if ((type === 'laptopRight' || type === 'laptopLeft')) {
    const isRigth = type === 'laptopRight'
    const margin = isRigth ? { marginRight: '272px' } : { marginLeft: '272px' }
    const position = isRigth ? { left: '50%' } : { right: '50%' }


    return (
      <>
        <BrowserView className={styles.itemImage}>
          <div
            style={{ cursor: `url('/scroll-cursor.svg'), auto` }}
            ref={screenRef}
            className={styles.itemImageScreen}
            onMouseEnter={() => setIsAutoScroll(false)}
          >
            <Image src={image} alt={header}
              priority
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <Image src={`/laptop-2.png`} alt={header}
            priority
            className={styles.itemImageLaptop}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </BrowserView>
        <MobileView className={styles.itemImageMobileLaptop} style={position}>
          {(pos === 'last' || pos === 'first') ?
            <>
              <div
                style={{ cursor: `url('/scroll-cursor.svg'), auto` }}
                ref={screenRef}
                className={styles.itemImageScreenMobileLaptopSingle}
                onMouseEnter={() => setIsAutoScroll(false)}
              >
                <Image src={image} alt={header}
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <Image src={`/laptop-2.png`} alt={header}
                priority
                className={styles.itemImageDeviceMobileLaptop}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%' }}
              />
            </>
            :
            <>
              <div
                style={{
                  cursor: `url('/scroll-cursor.svg'), auto`,
                  ...margin
                }}
                ref={screenRef}
                className={styles.itemImageScreenMobileLaptop}
                onMouseEnter={() => setIsAutoScroll(false)}
              >
                <Image src={image} alt={header}
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <Image src={`/laptop-2.png`} alt={header}
                priority
                className={styles.itemImageDeviceMobileLaptop}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%' }}
              />
            </>
          }
        </MobileView>
      </>
    )
  }
}