export const apiDataSerializer = (res: { data: {id: string, attributes: any }[]}) => {
  return res.data.map(item => {
    return {
      id: item.id,
      ...item.attributes
    }
  })
}