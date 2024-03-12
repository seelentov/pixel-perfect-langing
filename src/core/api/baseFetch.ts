'use server'

import { API_TOKEN, API_URL } from "../config/api.config"
import { apiDataSerializer } from "../utils/api/apiDataSerializer"

// IMAGE_URLS: .data.attributes.url

export const baseFetch = async (url: string, single: boolean = false, cache: boolean = false) => {
  let serializedData
  const options: any = {}

  if (!cache) {
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

    if (single) {
      return serializedData[0]
    }

    return serializedData

  } catch (error) {
    const newError = new Error(`\nfetch error: ${error}\nurl: ${API_URL + url}`)

    console.log(newError)
    return newError
  }


}
