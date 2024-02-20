import { nativeDevListing } from "@/data/native-dev/native-dev.listing";
import { webDevListing } from "@/data/web-dev/web-dev.listing";

export const ROUTING = {
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
      sublist: nativeDevListing.map(({ href, name, id }) => {
        return {
          id,
          href,
          name
        }
      })
    },
    {
      id: 4,
      href: '/web-dev',
      name: 'Разработка сайтов',
      sublist: webDevListing.map(({ href, name, id }) => {
        return {
          id,
          href,
          name
        }
      })
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