import { Portfolio } from "@/components/Portfolio/Portfolio";

import { Call } from "@/components/Call/Call";
import { Stages } from "@/components/Stages/Stages";
import { baseFetch } from "@/core/api/baseFetch";
import { API_URL } from "@/core/config/api.config";
import { parseObjToQuerytsts } from "@/core/utils/api/parseObjToQuery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Обо мне | Pixel Perfect",
  description: "Моя цель - помочь вам в создании качественного и уникального сайта, который будет отвечать вашим потребностям и ожиданиям.",
  openGraph: {
    title: 'Обо мне | Pixel Perfect',
    description: 'Моя цель - помочь вам в создании качественного и уникального сайта, который будет отвечать вашим потребностям и ожиданиям.',
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



export default async function About() {

  const stagesData = await baseFetch('/api/stages')

  const portfolioData: IPortfolio[] = await baseFetch('/api/portfolios?' + parseObjToQuerytsts([
    ['populate', 'exampleDesktop'],
    ['populate', 'exampleMobile']
  ]))
  return (
    <>
      <div className="content container">
        <h1>
          Обо мне
        </h1>
        Здравствуйте! Меня зовут Владислав, я являюсь веб-разработчиком. <br /><br />Моя цель - помочь вам в создании качественного и уникального сайта, который будет отвечать вашим потребностям и ожиданиям.<br /><br />
        Я верю в индивидуальный подход к каждому проекту. Каждый сайт, созданный мной, уникален и отражает уникальные потребности и желания заказчика. <br /><br />Моя цель - не просто создать сайт, а подарить вам инструмент, который поможет вам продвигать свой бизнес и достичь поставленных целей.
        <br /><br />
        В каждом проекте я ценю партнерство и доверие моих клиентов. Сотрудничество со мной означает работу над вашим проектом в тесном контакте, прозрачность на всех этапах работы и стремление к идеальному результату. <br /><br />Вместе мы сможем достичь великолепных результатов!<br /><br />
        Я готов воплотить в жизнь ваши идеи и помочь вам в создании превосходного сайта, который станет вашим эффективным инструментом в онлайн пространстве. <br /><br />Доверьте свой проект мне, и вместе мы создадем нечто по-настоящему впечатляющее!
      </div>
      {portfolioData && <Portfolio data={portfolioData} />}
      {stagesData && <Stages data={stagesData} header={'Как оформить заказ?'} />}
      <Call padding='none' />
    </>
  );
}
