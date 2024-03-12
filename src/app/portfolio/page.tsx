import { Call } from "@/components/Call/Call";
import { ListingGrid } from "@/components/ListingGrid/ListingGrid";
import { baseFetch } from "@/core/api/baseFetch";
import { API_URL } from "@/core/config/api.config";
import { parseObjToQuerytsts } from "@/core/utils/api/parseObjToQuery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио | Pixel Perfect",
  description: "Разработка мобильных и веб приложений для вашей компании",
  openGraph: {
    title: 'Портфолио | Pixel Perfect',
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
};



export default async function Portfolio() {

  const portfolioData: IPortfolio[] = await baseFetch('/api/portfolios?' + parseObjToQuerytsts([
    ['populate', 'exampleDesktop'],
    ['populate', 'exampleMobile']
  ]))


  return (
    <>
      <div className='content'>
        <div className="container">
          <h1>Примеры работ</h1>
        </div>
        <div className="container">
          {portfolioData && <ListingGrid data={portfolioData} />}
        </div>
      </div>
      <Call padding='none' />
    </>
  );
}
