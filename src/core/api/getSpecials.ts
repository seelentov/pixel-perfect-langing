import { IUIListingItemProps } from "@/components/UI/UIListing/UIListingItem";
import { baseFetch } from "./baseFetch";
import { getItemsByFilter } from "./getItemsByFilter";
import { getImageFromApiObject } from "../utils/api/getImageFromApiObject";

export const getSpecials = async () => {
  const specials:ISpecial[] = await baseFetch('/api/specials?populate=image');

  const data = specials.map(special => {
    return{
        ...special,
        slug: "/specials/" + special.slug,
        imageUrl: getImageFromApiObject(special.image)
    }
  })

  return data;
}