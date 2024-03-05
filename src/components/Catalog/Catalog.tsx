'use client'

import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './Catalog.module.scss';
import { CatalogTab } from './CatalogTab/CatalogTab';



export interface ICatalogProps {
  data: { [key: string]: ICatalogItem[] }
  header: string
}

export const Catalog: FC<ICatalogProps> = ({ header, data }) => {

  const keys = Object.keys(data)

  const [currentTabName, setCurrentTabName] = useState<string>(keys[0])
  const [currentData, setCurrentData] = useState<ICatalogItem[]>(data[keys[0]])


  const switchTab = (tabName: string) => {
    setCurrentTabName(tabName)
    setCurrentData(data[tabName])
  }

  return (
    <section className={styles.main}>
      <div className="container">
        <h2 className='text-header'>{header}</h2>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.controll}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={styles.tabs}>
              {keys?.map((tabName, index) => <li 
              key={index} 
              className={cn(styles.tab, tabName === currentTabName && styles.active)}
              onClick={()=>switchTab(tabName)}>
                {tabName}
                </li>)}
            </ul>
          </div>
          <div className={styles.tabName}>
            <h3>
              {"https://"+currentTabName.replace(' ', '_')}
            </h3>
          </div>
          <div className={styles.items}>
            <CatalogTab data={currentData}/>
          </div>
        </div>
      </div>
    </section>
  );
}