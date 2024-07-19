import { FC, HTMLAttributes } from 'react';
import styles from './UIListing.module.scss';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Link from 'next/link';

export interface IUIListingItemProps {
    imageUrl: string,
    title: string,
    desc?: string,
    slug?: string
}

export const UIListingItem: FC<IUIListingItemProps & { headerType: "h3" | "h2" | "h1" }> = ({ imageUrl, title, desc, slug, headerType }) => {

    return (
        <div className={styles.item}>
            <div className={styles.imageBlock}>
                <Image src={imageUrl} alt={title}
                    priority
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className={styles.image}
                />
                <Image src={"/ipad.png"} alt={title}
                    priority
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className={styles.device}
                />
            </div>
            <div className={styles.text}>
                {
                    headerType === "h2" ?
                        <h2 className={styles.title}>{title}</h2>
                        : headerType === "h3" ?
                            <h3 className={styles.title}>{title}</h3>
                            :
                            <h1 className={styles.title}>{title}</h1>
                }
                {desc && <p className={styles.desc}>{desc}</p>}
                {slug && <Link href={slug}>
                    <Button dubleText="Подробнее">
                        Подробнее
                    </Button>
                </Link>}

            </div>
        </div>
    );
}