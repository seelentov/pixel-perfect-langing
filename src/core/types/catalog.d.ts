interface ICatalogItem {
  id: string
  header: string
  description: string
  href: string
  icon: any
  category: {
    data: {
      id: number,
      attributes: ICategory
    }
  }
}