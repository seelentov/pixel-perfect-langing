import { Call } from '@/components/Call/Call';
import { Listing } from '@/components/Listing/Listing';
import { Stages } from '@/components/Stages/Stages';
import { baseFetch } from '@/core/api/baseFetch';
import { getItemByFilter, getItemsByFilter } from '@/core/api/getItemsByFilter';
import { API_URL } from '@/core/config/api.config';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(
  { params }: ICategoryPage
): Promise<Metadata> {

  const category: ICategory = await getItemByFilter('categories', ['href'], params.category)

  if (!category) {
    notFound();
  }

  return {
    title: `${category.header} | Pixel Perfect`,
    description: category.description,
    openGraph: {
      title: `${category.header} | Pixel Perfect`,
      description: category.description,
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
interface ICategoryPage {
  params: { category: string }
}


export default async function Category({ params }: ICategoryPage) {

  const category: ICategory = await getItemByFilter('categories', ['href'], params.category)

  if (!category) {
    notFound();
  }

  const services: IService[] = await getItemsByFilter('services', ['category', 'href'], params.category, [
    ['populate', 'desktopExample'],
    ['populate', 'mobileExample']
  ])

  const serializedServices: IService[] = services.map(item => {
    return { ...item, href: `/${params.category}/${item.href}` }
  })

  const stagesData = await baseFetch('/api/stages')

  return (
    <>
      <div className="container content">
        <h1>{category.header}</h1>
        <div dangerouslySetInnerHTML={{ __html: category.description }}></div>
      </div>
      <br />
      <br />
      <hr className="hr" />
      <br />
      <br />
      <div className="container">
        <Listing data={serializedServices} />
      </div>
      <br />
      <br />
      <hr className="hr" />
      {stagesData && <Stages data={stagesData} header={'Как оформить заказ?'} />}
      <Call padding='none' />
    </>
  );
}
