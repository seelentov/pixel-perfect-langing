import { FC } from 'react';

export interface IYMCoreProps {
  metrik_id: number,
}

export const YMCore: FC<IYMCoreProps> = ({ metrik_id }) => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(${metrik_id}, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
        }}
      />
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/12345678" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
    </>
  );
}