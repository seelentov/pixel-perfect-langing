interface IBanner {
  id: string
  attributes: {
    headerType?: 'h1' | 'h2'
    header: string
    description: string
    image: any
    type: 'laptopLeft' | 'mobile' | 'laptopRight'
    href: string
  }
}