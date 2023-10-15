import { Box } from "@mui/material";
import logo from '../../Image/emkiLogoLight.svg'
import styles from './Footer.module.css'
import instagram from '../../Image/Footer/instagram.svg'
import location from '../../Image/Footer/location.svg'
import call from '../../Image/Footer/call.svg'
import facebook from '../../Image/Footer/facebook.svg'
import { Link } from 'react-router-dom';
import sms from '../../Image/Footer/sms.svg'
export default function Footer() {
    const cliclFooterItem = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
        <Box sx={{ borderTop: '1px solid #222b45' }}>
            <Box 
            className=
                'mx-auto w-11/12 sm:w-4/5 xl:mb-0 pt-12 sm:pt-16 md:pt-16 xl:pt-16 pb-2 sm:pb-2 md:pb-2 xl:pb-2 '
            >
                <Box className={styles.imgItmesCon}>

                <img src={logo}/>
                <Box className={styles.allItemsCon}>
                    <Box className={styles.itemCon}>
                        <Box className={styles.title}>Contact</Box>
                        <Box className={styles.item}>
                            <img className={styles.footerIcon} src={call}/>
                            <Box className={styles.text}>+994 (55) 995 31 62</Box>
                        </Box>
                        <Box className={styles.item}>
                            <img className={styles.footerIcon} src={sms}/>
                            <Box className={styles.text}>office@emki.az</Box>
                        </Box>
                        
                    </Box>


                    <Box className={styles.itemCon}>
                        <Box className={styles.title}>Social</Box>
                        <Box className={styles.item}>
                            <img className={styles.footerIcon} src={facebook}/>
                            <Box className={styles.text}>Facebook</Box>
                        </Box>
                        <Box className={styles.item}>
                            <img className={styles.footerIcon} src={instagram}/>
                            <Box className={styles.text}>instagram</Box>
                        </Box>
                        
                    </Box>


                    <Box className={styles.itemCon}>
                        <Box className={styles.title}>Information</Box>
        <Link onClick={cliclFooterItem}  to='/about'>


                        <Box className={styles.item}>
                            <Box className={styles.text}>About us</Box>
                        </Box>
        </Link>
        <Link onClick={cliclFooterItem}  to='/sponsor'>

                        <Box className={styles.item}>
                            <Box className={styles.text}>Sponsor</Box>
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