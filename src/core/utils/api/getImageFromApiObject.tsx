import { API_URL } from "@/core/config/api.config"


export const getImageFromApiObject = (imageData: any, format: 'full' | 'small' | 'medium' | 'thumb' | 'large' = 'full') => {

  const image = imageData.data.attributes

  switch (format) {
    case 'full':
      return API_URL + image.url
    case 'thumb':
      return API_URL + image.formats.thumbnail.url
    case 'small':
      return API_URL + image.formats.small.url
    case 'medium':
      return API_URL + image.formats.medium.url
    case 'large':
      return API_URL + image.formats.large.url
  }

}