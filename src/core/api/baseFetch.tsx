'use server'

import { API_TOKEN, API_URL } from "../config/api.config"
import { apiDataSerializer } from "../utils/api/apiDataSerializer"

// IMAGE_URLS: .data.attributes.url

export const baseFetch = async (url: string) => {
  try {
    const res = await fetch(API_URL + url, {
      cache: 'no-store',
      headers: {
        'Authorization': 'Bearer ' + API_TOKEN,
      }
    },)

    const data = await res.json()

    const serializedData = apiDataSerializer(data)

    return serializedData

  } catch(error) {

    throw new Error(`\nfetch error: ${error}\nurl: ${API_URL + url}`)
  }
}
