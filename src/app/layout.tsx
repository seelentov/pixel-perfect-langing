import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { YMCore } from "@/components/YM/YMCore";
import { API_URL } from "@/core/config/api.config";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../style/style.scss";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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
        <YMCore metrik_id={97851645} />
        <Header />
        <main className="wrapper">
            {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
