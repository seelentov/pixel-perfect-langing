import { Banner } from "@/components/Banner/Banner";
import { FAQ } from "@/components/FAQ/FAQ";
import { Stages } from "@/components/Stages/Stages";
import { LoaderBig } from "@/components/UI/LoaderBig/LoaderBig";
import { API_URL } from "@/core/config/api.config";
import { testAdvantages } from "@/data/advantages/advantages.1";
import { testAdvantages2 } from "@/data/advantages/advantages.2";

export default async function HomePage() {

  const bannerRes = await fetch(API_URL + '/api/banners/?populate=image')
  const { data: bannerData } = await bannerRes.json()

  const faqRes = await fetch(API_URL + '/api/questions')
  const { data: faqData } = await faqRes.json()

  const stagesRes = await fetch(API_URL + '/api/stages')
  const { data: stagesData } = await stagesRes.json()

  return (
    <>
      <Banner data={bannerData} />
      <hr className="hr" />
      <FAQ header={'Частые вопросы'} data={faqData} />
      <hr className="hr" />
      {/*<Catalog header={'Каталог услуг'} data={} />*/}
      <hr className="hr" />
      <Stages data={stagesData} header={'Как оформить заказ?'} />
      <hr className="hr" />
    </>
  );
}
