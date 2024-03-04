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
      href: '/',
      name: 'Главная'
    },
    {
      id: 3,
      href: '/native-dev',
      name: 'Разработка приложений',
    },
    {
      id: 4,
      href: '/web-dev',
      name: 'Разработка сайтов',
    },
    {
      id: 5,
      href: '/services',
      name: 'Услуги'
    },
    {
      id: 7,
      href: '/portfolio',
      name: 'Примеры работ'
    },
    {
      id: 6,
      href: '/support',
      name: 'Поддержка'
    },
    {
      id: 2,
      href: '/about',
      name: 'Обо мне'
    },
    {
      id: 8,
      href: '/contacts',
      name: 'Контакты'
    },
  ]
}