type MenuLink = {
  id: number,
  href: string,
  name: string,
  sublist?: MenuLink[]
}

type ROUTING = {
  menuLinks: MenuLink[]
}

export const ROUTING: ROUTING = {
  menuLinks: [
    {
      id: 1,
      href: '/native-dev',
      name: 'Разработка приложений',
    },
    {
      id: 2,
      href: '/web-dev',
      name: 'Разработка сайтов',
    },
    {
      id: 3,
      href: '/services',
      name: 'Услуги'
    },
    {
      id: 4,
      href: '/portfolio',
      name: 'Примеры работ'
    },
    {
      id: 5,
      href: '/support',
      name: 'Поддержка'
    },
    {
      id: 6,
      href: '/about',
      name: 'Обо мне'
    },
    {
      id: 7,
      href: '/contacts',
      name: 'Контакты'
    },
  ]
}