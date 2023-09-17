import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend';

const resources = {
    EN: {
        translation: {
            Button: {
                buyTicket: 'Buy Ticket',
                events: 'Events',
                readMore: 'Read More',
                Home: 'Home',
                Events: 'Events',
                Blog: 'Blog',
                Sponsors: 'Sponsors',
                About: 'About us',
                Contact: 'Contact'
            },
            Home: {
                Content: {
                    title: 'Elevate Your Concert Experience',
                    text: 'Welcome to Emki Production - Your Ultimate Destination for Live Music & Entertainment. Connecting fans with artists and unforgettable concerts. Explore a world of genres and events, all in one place.',
                }
            },
            Navbar: {
                Home: 'Home',
                Events: 'Events',
                Blog: 'Blog',
                Sponsors: 'Sponsors',
                About: 'About us',
                Contact: 'Contact'
            }
        }
    },





    AZ: {
        translation: {
            Button: {
                buyTicket: 'Bilet al',
                events: 'Tədbirlər',
                readMore: 'Ətraflı',
                Home: 'Ana səhifə',
                Events: 'Tədbirlər',
                Blog: 'Blog',
                Sponsors: 'Sponsorlar',
                About: 'Haqqımızda',
                Contact: 'Əlaqə'
            },
            Home: {
                Content: {
                    title: 'Konsert Təcrübənizi yüksəldin',
                    text: 'Emki Production-a xoş gəlmisiniz - Canlı Musiqi və Əyləncə üçün Son Məkanınız. Fanatları sənətçilərlə və unudulmaz konsertlərlə əlaqələndirmək. Hamısı bir yerdə janrlar və hadisələr dünyasını kəşf edin.',
                }
            },
            Navbar: {
                Home: 'Ana səhifə',
                Events: 'Tədbirlər',
                Blog: 'Blog',
                Sponsors: 'Sponsorlar',
                About: 'Haqqımızda',
                Contact: 'Əlaqə'
            }
        }
    },




    
    RU: {
        translation: {
            Button: {
                buyTicket: 'Купить билет',
                events: 'События',
                readMore: 'Подробнее',
                Home: 'Дом',
                Events: 'События',
                Blog: 'Блог',
                Sponsors: 'Спонсоры',
                About: 'О нас',
                Contact: 'Контакт'
            },
            Home: {
                Content: {
                    title: 'Улучшите свой концертный опыт',
                    text: 'Добро пожаловать в Emki Production — идеальное место для живой музыки и развлечений. Соединение поклонников с артистами и незабываемые концерты. Исследуйте мир жанров и событий в одном месте.',
                }
            },
            Navbar: {
                Home: 'Дом',
                Events: 'События',
                Blog: 'Блог',
                Sponsors: 'Спонсоры',
                About: 'О нас',
                Contact: 'Контакт'
            }
        }
    }
}

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: 'AZ',
        resources
    })


export default i18n