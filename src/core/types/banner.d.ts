interface IBanner {
  id: string
  headerType?: 'h1' | 'h2'
  header: string
  desc: string
  image: string
  type: 'laptop' | 'mobile'
  href: string
}