import { Listing } from '@/components/Listing/Listing';
import { getItemByFilter, getItemsByFilter } from '@/core/api/getItemsByFilter';
import { notFound } from 'next/navigation';

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

  return (
    <>
      <div className='container content'>
        <h1>{category.header}</h1>
        <div dangerouslySetInnerHTML={{__html: category.description}}></div>
        <Listing data={serializedServices} />
        <br />
        <br />
      </div>
    </>
  );
}
