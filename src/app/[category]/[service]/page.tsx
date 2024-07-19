import { BannerItem } from "@/components/Banner/BannerItem";
import { Call } from "@/components/Call/Call";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Stages } from "@/components/Stages/Stages";
import { baseFetch } from "@/core/api/baseFetch";
import { getItemByFilter } from "@/core/api/getItemsByFilter";
import { API_URL } from "@/core/config/api.config";
import { parseObjToQuerytsts } from "@/core/utils/api/parseObjToQuery";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";


export async function generateMetadata(
  { params }: IServicePage
): Promise<Metadata> {

  const service: IService = await getItemByFilter('services', ['href'], params.service, [
    ['populate', 'desktopExample'],
    ['populate', 'mobileExample']
  ])

  if (!service) {
    notFound();
  }

  return {
    title: `${service.header} | Pixel Perfect`,
    description: service.description,
    openGraph: {
      title: `${service.header} | Pixel Perfect`,
      description: service.description,
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
  }
}


interface IServicePage {
  params: { service: string }
}


export default async function Service({ params }: IServicePage) {


  const service: IService = await getItemByFilter('services', ['href'], params.service, [
    ['populate', 'desktopExample'],
    ['populate', 'mobileExample']
  ])

  const portfolioData: IPortfolio[] = await baseFetch('/api/portfolios?' + parseObjToQuerytsts([
    ['populate', 'exampleDesktop'],
    ['populate', 'exampleMobile']
  ]))

  const stagesData = await baseFetch('/api/stages')

  if (!service) {
    notFound();
  }


  const image = service.desktopExample.data ? service.desktopExample : service.mobileExample
  const imageType = service.desktopExample.data ? 'laptopLeft' : 'mobile'

  return (
    <>
      <div className="container " style={{padding: 0}}>
        <BannerItem header={service.header} headerType='h1' pos="first" image={image} description={service.description} type={imageType} />
      </div>
      <hr className="hr" />

      <div className="container content" dangerouslySetInnerHTML={{ __html: service.text }}></div>
      <hr className="hr" />
      {portfolioData && <Portfolio data={portfolioData} />}
      <hr className="hr" />
      <div className="container content" dangerouslySetInnerHTML={{ __html: service.textBottom }}></div>
      <hr className="hr" />
      {stagesData && <Stages data={stagesData} header={'Как оформить заказ?'} />}
      <Call padding='none' />
    </>
  );
}
