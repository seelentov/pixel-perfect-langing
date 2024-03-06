'use server'

import { API_TOKEN, API_URL } from "../config/api.config"
import { apiDataSerializer } from "../utils/api/apiDataSerializer"

// IMAGE_URLS: .data.attributes.url

export const baseFetch = async (url: string, cache: boolean = true) => {
  let serializedData

  const options: any = {}

  if(!cache){
    options.cache = 'no-store'
  } else {
    options.next = { revalidate: 86400 }
  }

  options.headers = {
    'Authorization': 'Bearer ' + API_TOKEN,
  }


  try {
    const res = await fetch(API_URL + url, options)

    const data = await res.json()

    serializedData = apiDataSerializer(data)

    return serializedData

  } catch (error) {
    throw new Error(`\nfetch error: ${error}\nurl: ${API_URL + url}`)
  }


}
