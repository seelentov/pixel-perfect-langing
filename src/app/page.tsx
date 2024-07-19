import { Advantages } from "@/components/Advantages/Advantages";
import { Banner } from "@/components/Banner/Banner";
import { Call } from "@/components/Call/Call";
import { Catalog } from "@/components/Catalog/Catalog";
import { FAQ } from "@/components/FAQ/FAQ";
import { ModalForm } from "@/components/ModalForm/ModalForm";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Stages } from "@/components/Stages/Stages";
import { UIListing } from "@/components/UI/UIListing/UIListing";
import { IUIListingItemProps } from "@/components/UI/UIListing/UIListingItem";
import { baseFetch } from "@/core/api/baseFetch";
import { getSerializedServices } from "@/core/api/getSerializedServices";
import { getSpecials } from "@/core/api/getSpecials";
import { API_URL } from "@/core/config/api.config";
import { parseObjToQuerytsts } from "@/core/utils/api/parseObjToQuery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel Perfect",
  description: "Разработка мобильных и веб приложений для вашей компании",
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
};


export default async function HomePage() {

  const bannerData = await baseFetch(`/api/banners/?${parseObjToQuerytsts([
    ['populate', 'image']
  ])}`)
  const faqData = await baseFetch('/api/questions')
  const stagesData = await baseFetch('/api/stages')

  const categoriesData = await getSerializedServices()

  const specialsData: IUIListingItemProps[] = await getSpecials()


  const portfolioData: IPortfolio[] = await baseFetch('/api/portfolios?' + parseObjToQuerytsts([
    ['populate', 'exampleDesktop'],
    ['populate', 'exampleMobile']
  ]))

  const advantagesData: IAdvantages[] = await baseFetch('/api/advantages?' + parseObjToQuerytsts([
    ['populate', 'icon'],
  ]))

  return (
    <>
      {bannerData && <Banner data={bannerData} />}
      <hr className="hr" />
      
      {specialsData &&
        <div className="container content">
          <h2 className='text-header'>Выгодные предложения</h2>
          <UIListing items={specialsData} headerType="h3"/>
        </div>}
      <hr className="hr" />
      {advantagesData && <Advantages advantages={advantagesData} />}
      <hr className="hr" />
      {categoriesData && <Catalog header={'Каталог услуг'} data={categoriesData} />}
      <hr className="hr" />
      {portfolioData && <Portfolio data={portfolioData} />}
      <hr className="hr" />
      {stagesData && <Stages data={stagesData} header={'Как оформить заказ?'} />}
      <hr className="hr" />
      {faqData && <FAQ header={'Частые вопросы'} data={faqData} />}
      <Call padding="none" />
      <ModalForm />
    </>
  );
}
