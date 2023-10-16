import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend';
const lang = localStorage.getItem('lang');
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
                OurValues: 'Our values',
                DiscoverEvents: 'Discover Events'
            },
            Home: {
                Content: {
                    title: 'Elevate Your Concert Experience',
                    text: "Welcome to the ultimate destination for music enthusiasts and concert-goers! At EMKI Production, we're passionate about bringing you the very best in live music experiences. Whether you're a die-hard fan or a casual listener, we've got something special in store for you.",
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
            },
            OurValues: {
                Title1: "We always give honest feedback and practical suggestions to help you",
                Title2: 'We help you understand everything by clearly presenting information',
                Title3: 'Our events are carefully planned to meet the goals of modern businesses',
                Title4: "We approach every engagement with confidence in our ability to forge a long-term relationships",
                Desc1: 'Trust',
                Desc2: 'Transparency',
                Desc3: 'Innovation',
                Desc4: "Collaboration"
            },
            Sponsor: {
                Title: "Have a Project?",
            }
            ,
            Footer: {
                Contact: "Contact",
                Social: 'Social',
                Information: 'Information',
                About: 'About us',
                Sponsor: 'Sponsor'
            }
            
        }
    },





    AZ: {
        translation: {
            Button: {
                buyTicket: 'Bilet al',
                events: 'Tədbirlər',
                readMore: 'Daha çox',
                Home: 'Əsas',
                Events: 'Tədbirlər',
                Blog: 'Bloq',
                Sponsors: 'Sponsorlar',
                About: 'Haqqımızda',
                Contact: 'Əlaqə',
                OurValues: 'Dəyərlərimiz',
                DiscoverEvents: 'Tədbirləri kəşf et'
            },
            Home: {
                Content: {
                    title: 'Konsert Təcrübənizi yüksəldin',
                    text: 'Musiqi sevənlər və konsert həvəskarları üçün son təyinat nöqtəsinə xoş gəlmisiniz. EMKI Production olaraq sizə canlı musiqi təcrübəsini ən yaxşı şəkildə təqdim etməkdə peşəkarıq. Qatı fanat və ya sadə dinləyici olmağınızdan aslı olmayaraq sizin üçün xüsusi tədbirlərimiz var.',
                }
            },
            Navbar: {
                Home: 'Əsas',
                Events: 'Tədbirlər',
                Blog: 'Bloq',
                Sponsors: 'Sponsorlar',
                About: 'Haqqımızda',
                Contact: 'Əlaqə'
            },
            About: {
                Title1: "Tədbirinizin Potensiyalını Ortaya Çıxarın",
                Title2: 'Təcrübəmizlə Yayımınızı təkmilləşdirin!',
                Desc1: 'Tədbirinizi istənilən platforma vasitəsilə dünyaya nümayiş etdirin. Biz tədbirlərin yayımı və nümayişi xidmətləri üzrə liderik və konsaltinq xidmətləri təklif edərək, tədbirin yayımı sahəsi üzrə müştərilərimiz üçün ən son sistemləri təkmilləşdiririk.',
            },
            OurValues: {
                Title1: "Biz sizə kömək etmək üçün dürüst rəy və praktiki təkliflər veririk",
                Title2: 'Biz bütün məlumatları aydın ifadə edərək hər şeyi başa düşməyə kömək edirik',
                Title3: 'Tədbirlərimiz müasir biznesin məqsədlərinə cavab vermək üçün diqqətlə planlaşdırılır',
                Title4: "Biz hər bir işə uzunmüddətli əlaqələr qurmaq qabiliyyətimizə inanaraq yanaşırıq",
                Desc1: 'Güvən',
                Desc2: 'Şəffaflıq',
                Desc3: 'İnnovasiya',
                Desc4: "Əməkdaşlıq"
            },
            Sponsor: {
                Title: "Proyektiniz var?",
            }
            ,
            Footer: {
                Contact: "Əlaqə",
                Social: 'Sosial',
                Information: 'Haqqımızda',
                About: 'Haqqımızda',
                Sponsor: 'Sponsorlar'
            }
        }
    },




    
    RU: {
        translation: {
            Button: {
                buyTicket: 'Купи билет',
                events: 'Мероприятия',
                readMore: 'Больше',
                Home: 'Главная',
                Events: 'Мероприятия',
                Blog: 'Блог',
                Sponsors: 'Спонсоры',
                About: 'О нас',
                Contact: 'Контакт',
                OurValues: 'Наши ценности',
                DiscoverEvents: 'Открой для себя мероприятия'
            },
            Home: {
                Content: {
                    title: 'Повысьте ваш концертный опыт',
                    text: 'Добро пожаловать в конечную точку любителей музыки и энтузиастов концертов. Будучи EMKI Production мы профессионалы в предоставлении вам опыта живой музыки. У нас для вас особые мероприятия, независимо от того, вы ярый фанат или простой слушатель.',
                }
            },
            Navbar: {
                Home: 'Главная',
                Events: 'Мероприятия',
                Blog: 'Блог',
                Sponsors: 'Спонсоры',
                About: 'О нас',
                Contact: 'Контакт'
            },
            About: {
                Title1: "Раскройте потенциал вашего мероприятия.",
                Title2: 'Улучшите вашу трансляцию нашим опытом',
                Desc1: 'Покажите свое мероприятие миру через любую платформу. Мы являемся лидерами в сфере стриминговых и трансляционных услуг для мероприятий, предлагая консультационные услуги и разработку комплексных систем для наших клиентов в сфере трансляций мероприятий.',
            },
            OurValues: {
                Title1: "Мы всегда предоставляем вам для помощи честные отзывы и практические предложения",
                Title2: 'Мы помогаем понять всё, точно выражая всю информацию',
                Title3: 'Наши мероприятия внимательно планируются, отвечая современным целям бизнеса',
                Title4: "Мы подходим к каждой работе доверяя нашим способностям создавать длительные отношения",
                Desc1: 'Доверься',
                Desc2: 'Прозрачность',
                Desc3: 'Инновация',
                Desc4: "Сотрудничество"
            },
            Sponsor: {
                Title: "У вас есть проект?",
            }
            ,
            Footer: {
                Contact: "Контакт",
                Social: 'Социальные',
                Information: 'Информация',
                About: 'О нас',
                Sponsor: 'Спонсоры'
            }
            
        }
    }
}

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: lang ? lang : 'AZ',
        resources
    })


export default i18n