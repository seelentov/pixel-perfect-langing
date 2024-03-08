export const apiDataSerializer = (res: { data: { id: string, attributes: any }[] | { id: string, attributes: any } }) => {
  if (Array.isArray(res.data)) {
    return res.data.map(item => {
      return {
        id: item.id,
        ...item.attributes
      }
    })
  }

  return {
    id: res.data.id,
    ...res.data.attributes
  }
}