import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { API_URL } from "@/core/config/api.config";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../style/style.scss";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Perfect",
  description: "Разработка мобильных и веб приложений для вашей компании",
  metadataBase: new URL(API_URL),
  openGraph: {
    title: 'Pixel Perfect',
    description: 'Разработка мобильных и веб приложений для вашей компании',
    url: API_URL,
    siteName: 'Pixel Perfect',
    images: [
      {
        url: '/favicon.png',
        width: 500,
        height: 500,
      },
    ],
    locale: 'ru',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(96723379, "init", {
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
        <Header />
        <main className="wrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
