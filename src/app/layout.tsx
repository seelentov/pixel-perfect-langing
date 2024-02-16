import { Header } from "@/components/Header/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../style/style.scss";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel perfect",
  description: "Разработка мобильных и веб приложений для вашей компании",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
