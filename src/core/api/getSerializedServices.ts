'use server'

import { baseFetch } from "@/core/api/baseFetch";
import { getItemsByFilter } from "@/core/api/getItemsByFilter";

export const getSerializedServices = async () => {
  const categories = await baseFetch('/api/categories');

  const categoriesKeys = categories.map((item: any) => item.header);



  let promises = categoriesKeys.map(async (category: string) => {
    const data = await getItemsByFilter('services', ['category', 'header'], category, [['populate','icon'], ['populate','category']]);
    return [category, data];
  });

  const resultArray = await Promise.all(promises);

  let result: { [key: string]: any } = {};
  resultArray.forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
}