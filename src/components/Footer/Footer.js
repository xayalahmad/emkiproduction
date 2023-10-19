import { Box } from "@mui/material";
import logo from '../../Image/emkiLogoLight.svg'
import styles from './Footer.module.css'
import instagram from '../../Image/Footer/instagram.svg'
import location from '../../Image/Footer/location.svg'
import call from '../../Image/Footer/call.svg'
import facebook from '../../Image/Footer/facebook.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import sms from '../../Image/Footer/sms.svg'

export default function Footer() {
    const { t, i18n } = useTranslation()

    const cliclFooterItem = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Box sx={{ borderTop: '1px solid #222b45', marginTop: '48px' }}>
                <Box
                    className=
                    'mx-auto w-11/12 sm:w-4/5 xl:mb-0 pt-12 sm:pt-16 md:pt-16 xl:pt-16 pb-2 sm:pb-2 md:pb-2 xl:pb-2 '
                >
                    <Box className={styles.imgItmesCon}>

                        <img src={logo} />
                        <Box className={styles.allItemsCon}>
                            <Box className={styles.itemCon}>
                                <Box className={styles.title}>{t('Footer.Contact')}</Box>
                                <Box className={styles.item}>
                                    <img className={styles.footerIcon} src={call} />
                                    <Box className={styles.text}>+994 (55) 995 31 62</Box>
                                </Box>
                                <Box className={styles.item}>
                                    <img className={styles.footerIcon} src={sms} />
                                    <Box className={styles.text}>office@emki.az</Box>
                                </Box>

                            </Box>


                            <Box className={`${styles.itemCon}  ml-6 mr-6`}>
                                <Box className={styles.title}>{t('Footer.Social')}</Box>
    <Link target={'_blank'} to={'https://www.facebook.com/emkiproduction/'}>


                                <Box className={styles.item}>
                                    <img className={styles.footerIcon} src={facebook} />
                                    <Box className={styles.text}>Facebook</Box>
                                </Box>
    </Link>
    <Link target={'_blank'} to={'https://www.instagram.com/emkiproduction/'}>

                                <Box className={styles.item}>
                                    <img className={styles.footerIcon} src={instagram} />
                                    <Box className={styles.text}>instagram</Box>
                                </Box>
    </Link>

                            </Box>


                            <Box className={`${styles.itemCon} ${styles.itemCon2}`}>
                                <Box className={styles.title}>{t('Footer.Information')}</Box>
                                <Link onClick={cliclFooterItem} to='/about'>


                                    <Box className={styles.item}>
                                        <Box className={styles.text}>{t('Footer.About')}</Box>
                                    </Box>
                                </Link>
                                <Link onClick={cliclFooterItem} to='/sponsor'>

                                    <Box className={styles.item}>
                                        <Box className={styles.text}>{t('Footer.Sponsor')}</Box>
                                    </Box>
                                </Link>

                            </Box>

                        </Box>










                    </Box>
                </Box>
                <Box className={styles.copyBg}>

                    <Box className={`${styles.copy} mx-auto w-11/12 sm:w-4/5 xl:mb-0`}>
                        © emkiproduction.com 2023
                    </Box>
                </Box>
            </Box>
        </>
    )
}