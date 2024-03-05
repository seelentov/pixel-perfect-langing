'use client'

import { FC, useEffect, useRef, useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import styles from './FAQ.module.scss';

export interface IFAQProps {
  data: IAdvantages[]
  header: string
}

export const FAQ: FC<IFAQProps> = ({ data, header }) => {
  const [thisFaq, setThisFaq] = useState<number>(1)
  const answerRef = useRef<any>(null)

  useEffect(() => {

    if (!answerRef.current) {
      return
    }

    answerRef.current.scrollTo({
      top: 400 * (thisFaq - 1),
      behavior: 'smooth'
    })

  }, [thisFaq])

  const questionsLineTop = `calc(${26 * thisFaq}px + ${40 * (thisFaq - 1)}px)`

  return (
    <>
      <BrowserView>
        <section className={styles.main}>
          <div className='container'>
            <h2 className='text-header'>{header}</h2>
            <div className={styles.wrapper}>
              <div className={styles.answers} >
                <ul className={styles.answersWrapper} ref={answerRef}>
                  {data.map((item) => <li key={item.id} className={styles.answersItem}>
                    {item.description}
                  </li>)}
                </ul>
              </div>
              <div className={styles.first}>
                <div className={styles.questions}>
                  <div className={styles.questionsLine}>
                    <span style={{ top: questionsLineTop }}></span>
                  </div>
                  <ul className={styles.questionsText}>
                    {data.map((item, index) => <li onMouseEnter={() => setThisFaq(index + 1)} key={item.id} className={styles.questionsTextItem}>
                      {item.header}
                    </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BrowserView>
      <MobileView>
        <FAQMobile {...{ data, header }} />
      </MobileView>
    </>

  );
}

const FAQMobile: FC<IFAQProps> = ({ data, header }) => {
  const [thisFaq, setThisFaq] = useState<number | null>(null)

  const answerRef = useRef<any>(null)

  useEffect(() => {

    if (!answerRef.current) {
      return
    }

    if (thisFaq === null) {
      return answerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    answerRef.current.scrollTo({
      top: (218 * (thisFaq - 1)) + 218,
      behavior: 'smooth'
    })

  }, [thisFaq])

  return (
    <section className={styles.main}>
      <div className='container'>
        <h2 className='text-header'>{header}</h2>
        <div className={styles.wrapper}>
          <div className={styles.answers} >
            <div className={styles.answersWrapper} ref={answerRef}>
              <div className={styles.answersHeader}>
                <ul>
                  {data.map((item, index) => <li key={item.id} onClick={() => setThisFaq(index + 1)}>{item.header}</li>)}
                </ul>
              </div>
              {data.map((item) => <article key={item.id} className={styles.answersItem}>
                <button onClick={() => setThisFaq(null)}>Назад</button>
                <h3>{item.header}</h3>
                <p>{item.description}</p>
              </article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}