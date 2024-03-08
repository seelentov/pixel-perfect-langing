'use server'

import { parseObjToQuerytsts } from "../utils/api/parseObjToQuery"
import { baseFetch } from "./baseFetch"

export const getItemsByFilter = async (dataModel: string, fitlerPath: string[], value: string, options: [string, string][] | null = null) => {

  const url: string = `/api/${dataModel}?filters${fitlerPath.map(fitlerItem => `[${fitlerItem}]`).join('')}=${value}${options ? '&' + parseObjToQuerytsts(options) : ''}`

  const data = await baseFetch(url)

  return data

}


export const getItemByFilter = async (dataModel: string, fitlerPath: string[], value: string, options: [string, string][] | null = null) => {

  const url: string = `/api/${dataModel}?filters${fitlerPath.map(fitlerItem => `[${fitlerItem}]`).join('')}=${value}${options ? '&' + parseObjToQuerytsts(options) : ''}`

  const data = await baseFetch(url)

  return data[0]

}