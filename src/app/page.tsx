import { Banner } from "@/components/Banner/Banner";
import { Catalog } from "@/components/Catalog/Catalog";
import { FAQ } from "@/components/FAQ/FAQ";
import { Stages } from "@/components/Stages/Stages";
import { baseFetch } from "@/core/api/baseFetch";
import { getSerializedServices } from "@/core/api/getSerializedServices";
import { parseObjToQuerytsts } from "@/core/utils/api/parseObjToQuery";

export default async function HomePage() {

  const bannerData = await baseFetch(`/api/banners/?${parseObjToQuerytsts([
    ['populate', 'image']
  ])}`)
  const faqData = await baseFetch('/api/questions')
  const stagesData = await baseFetch('/api/stages')

  const categoriesData = await getSerializedServices()

  return (
    <>
      {bannerData && <Banner data={bannerData} />}
      <hr className="hr" />
      {categoriesData && <Catalog header={'Каталог услуг'} data={categoriesData} />}
      <hr className="hr" />
      {stagesData && <Stages data={stagesData} header={'Как оформить заказ?'} />}
      <hr className="hr" />
      <hr className="hr" />
      {faqData && <FAQ header={'Частые вопросы'} data={faqData} />}
      <hr className="hr" />
    </>
  );
}
