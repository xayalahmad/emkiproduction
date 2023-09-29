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
                Contact: 'Contact',
                OurValues: 'Our values'

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
            },
            About: {
                Title1: "Unleash Your Event's Potential:",
                Title2: 'Elevate Your Streaming with Our Expertise!',
                Desc1: 'Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.',
                Desc2: "EMKI production – we are more than just a organization – we are your passionate gateway to the electrifying world of live music and entertainment. We understand the magnetic pull of a live performance, the heart-pounding excitement as the lights dim, and the stage comes alive with the energy of artists pouring their souls into their craft. We're here to make sure you don't miss a beat."
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
                Contact: 'Əlaqə',
                OurValues: 'Dəyərlərimiz'

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
            },
            About: {
                Title1: "Tədbirinizin Potensialını Açın:",
                Title2: 'Təcrübəmizlə Yayımınızı yüksəldin!',
                Desc1: 'Tədbirinizi istənilən platforma vasitəsilə dünyaya göstərin. Biz hadisələr üçün axın və yayım xidmətləri, konsaltinq xidmətləri təklif edən və hadisələrin yayımında müştərilərimiz üçün tam sistemlərin işlənib hazırlanmasında liderik.',
                Desc2: "EMKI istehsalı - biz sadəcə bir təşkilat deyilik - biz canlı musiqi və əyləncənin ehtiraslı dünyasına açılan ehtiraslı qapınızıq. Biz canlı performansın maqnit cazibəsini, işıqlar söndükcə ürək döyüntüsünü anlayırıq və səhnə ruhlarını sənətlərinə atan sənətçilərin enerjisi ilə canlanır. Biz sizin heç bir ritmi qaçırmamağınızdan əmin olmaq üçün buradayıq."
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
                Contact: 'Контакт',
                OurValues: 'Наши ценности'
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
            },
            About: {
                Title1: "Раскройте потенциал вашего мероприятия:",
                Title2: 'Улучшите качество своей потоковой передачи с помощью нашего опыта!',
                Desc1: 'Покажите свое мероприятие миру через любую платформу. Мы являемся лидерами в сфере услуг потоковой передачи и трансляции мероприятий, предлагая консультационные услуги и разработку комплексных систем для наших клиентов в области трансляции мероприятий.',
                Desc2: "EMKI Production — мы больше, чем просто организация — мы — ваши страстные ворота в захватывающий мир живой музыки и развлечений. Мы понимаем магнетическое притяжение живого выступления, душераздирающее волнение, когда свет тускнеет, и сцена оживает благодаря энергии артистов, вкладывающих душу в свое ремесло. Мы здесь, чтобы вы не пропустили ни одной детали."
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