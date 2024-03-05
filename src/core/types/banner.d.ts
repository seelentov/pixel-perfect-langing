interface IBanner {
  id: string
  headerType?: 'h1' | 'h2'
  header: string
  description: string
  image: any
  type: 'laptopLeft' | 'mobile' | 'laptopRight'
  href: string

}