export const parseObjToQuerytsts = (data: [string, string][]) => {

  const result = data.map(dataItem => dataItem.join('='))

  return result.join('&')

}