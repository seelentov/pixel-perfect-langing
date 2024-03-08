import { baseFetch } from "./baseFetch";
import { getItemsByFilter } from "./getItemsByFilter";

export const getServiceLinks = async () => {
  const categories: ICategory[] = await baseFetch('/api/categories');

  const promises = categories.map(async ({ href: mainHref, id, header }) => {
    const services: IService[] = await getItemsByFilter('services', ['category', 'header'], header, [['populate','icon']]);

    const mappedServices = services.map(({ id, href, header }) => ({
      id: id,
      href: href,
      name: header,
    }));

    return {
      id: id,
      href: mainHref,
      name: header,
      sublist: mappedServices
    };
  });

  const links = await Promise.all(promises);

  return links;
}