import { BannerItem } from "@/components/Banner/BannerItem";
import { Call } from "@/components/Call/Call";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Stages } from "@/components/Stages/Stages";
import { IUIListingItemProps, UIListingItem } from "@/components/UI/UIListing/UIListingItem";
import { baseFetch } from "@/core/api/baseFetch";
import { getItemByFilter } from "@/core/api/getItemsByFilter";
import { API_URL } from "@/core/config/api.config";
import { getImageFromApiObject } from "@/core/utils/api/getImageFromApiObject";
import { parseObjToQuerytsts } from "@/core/utils/api/parseObjToQuery";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";


export async function generateMetadata(
  { params }: ISpecialPage
): Promise<Metadata> {

  const special: ISpecial = await getItemByFilter('specials', ['slug'], params.special, [
    ['populate', 'image'],
  ])

  if (!special) {
    notFound();
  }

  return {
    title: `${special.title} | Pixel Perfect`,
    description: special.desc,
    openGraph: {
      title: `${special.title} | Pixel Perfect`,
      description: special.desc,
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


interface ISpecialPage {
  params: { special: string }
}


export default async function Service({ params }: ISpecialPage) {

  const special: ISpecial = await getItemByFilter('specials', ['slug'], params.special, [
    ['populate', 'image'],
  ])

  if (!special) {
    notFound();
  }

  return (
    <>
      <div className="content">
        <div className="container" style={{ padding: 0 }}>
          <UIListingItem imageUrl={getImageFromApiObject(special.image)} title={special.title} desc={special.desc} headerType="h1"/>
        </div>
        <hr className="hr" style={{ marginTop: "55px", marginBottom: '55px' }} />
        <div className="container" dangerouslySetInnerHTML={{ __html: special.text }}></div>
        <hr className="hr" style={{ marginTop: "55px", marginBottom: '55px' }} />
      </div>
      <Call padding='none' />
    </>
  );
}
