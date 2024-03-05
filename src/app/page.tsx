import { Banner } from "@/components/Banner/Banner";
import { Catalog } from "@/components/Catalog/Catalog";
import { FAQ } from "@/components/FAQ/FAQ";
import { Stages } from "@/components/Stages/Stages";
import { baseFetch } from "@/core/api/baseFetch";

export default async function HomePage() {

  const bannerData = await baseFetch('/api/banners/?populate=image')
  const faqData = await baseFetch('/api/questions')
  const stagesData = await baseFetch('/api/stages')

  const mobileDevData = await baseFetch('/api/services?filters[section]=mobile&populate=icon')
  const webDevData = await baseFetch('/api/services?filters[section]=web&populate=icon')
  const servicesData = await baseFetch('/api/services?filters[section]=service&populate=icon')

  const catalogSerializedData = {
    'Разработка cайтов':webDevData,
    'Разработка приложений': mobileDevData,
    'Услуги':servicesData
  }

  return (
    <>
      <Banner data={bannerData} />
      <hr className="hr" />
      <FAQ header={'Частые вопросы'} data={faqData} />
      <hr className="hr" />
      <Catalog header={'Каталог услуг'} data={catalogSerializedData}/>
      <hr className="hr" />
      <Stages data={stagesData} header={'Как оформить заказ?'} />
      <hr className="hr" />
    </>
  );
}
