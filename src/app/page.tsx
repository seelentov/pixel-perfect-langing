import { Advantages } from "@/components/Advantages/Advantages";
import { Banner } from "@/components/Banner/Banner";
import { Stages } from "@/components/Stages/Stages";
import { testAdvantages } from "@/data/advantages/advantages.1";
import { testAdvantages2 } from "@/data/advantages/advantages.2";
import { testBanners } from "@/data/banner/banner";

export default function Home() {
  return (
    <>
      <Banner data={testBanners} />
      <Advantages header={'Мои преимущества'} data={testAdvantages} />
      <Stages data={testAdvantages2} header={'Как оформить заказ?'} />
    </>
  );
}
