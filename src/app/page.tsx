import { Banner } from "@/components/Banner/Banner";
import { FAQ } from "@/components/FAQ/FAQ";
import { Stages } from "@/components/Stages/Stages";
import { baseFetch } from "@/core/api/baseFetch";

export default async function HomePage() {

  const bannerData = await baseFetch('/api/banners/?populate=image')
  const faqData = await baseFetch('/api/questions')
  const stagesData = await baseFetch('/api/stages')

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
