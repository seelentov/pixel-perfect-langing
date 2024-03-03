import { Banner } from "@/components/Banner/Banner";
import { FAQ } from "@/components/FAQ/FAQ";
import { Stages } from "@/components/Stages/Stages";
import { testAdvantages } from "@/data/advantages/advantages.1";
import { testAdvantages2 } from "@/data/advantages/advantages.2";
import { testBanners } from "@/data/banner/banner";

export default function HomePage() {
  return (
    <>
      <Banner data={testBanners} />
      <hr className="hr" />
      <FAQ header={'Частые вопросы'} data={testAdvantages} />
      <hr className="hr" />
      {/*<Catalog header={'Каталог услуг'} data={} />*/}
      <hr className="hr" />
      <Stages data={testAdvantages2} header={'Как оформить заказ?'} />
      <hr className="hr" />
    </>
  );
}
