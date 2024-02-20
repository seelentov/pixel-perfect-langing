interface IBanner {
  id: string
  headerType?: 'h1' | 'h2'
  header: string
  desc: string
  image: string
  type: 'laptop-left' | 'mobile' | 'laptop-right'
  href: string
}