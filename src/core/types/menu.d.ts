type MenuLink = {
  id: number,
  href: string,
  name: string,
  sublist?: MenuLink[]
}

type ROUTING = {
  menuLinks: MenuLink[]
}