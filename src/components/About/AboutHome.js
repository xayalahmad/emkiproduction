import { Box } from "@mui/material";
import aboutImg from '../../Image/About/aboutBg.png'
import styles from './AboutHome.module.css'
import { useTranslation } from 'react-i18next';
import ArtistImg from '../../Image/About/Artist.png'
import Pb from "../myButton/Pb/Pb";
export default function AboutHome() {

    const { t, i18n } = useTranslation()


    return (
        <>
            <Box
                style={{
                    // backgroundImage: `url(${aboutImg})`,
                    borderRadius: '0 0 40px 40px',
           background: 'linear-gradient(257deg, #151A30 0%, #211D4D 28%, #271630 70%, #0F1836 100%), linear-gradient(0deg, rgba(21, 26, 48, 0.40) 0%, rgba(21, 26, 48, 0.40) 100%)'

                }}
                className={styles.aboutBg}
            >
                <Box className='mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40'>
                    <Box className={styles.container}>
                        <Box className={styles.content}>
                    <Pb   button='About'/>
                            <Box className={styles.title1}>
                            {t('About.Title1')}
                            </Box>
                            <Box className={styles.title2}>
                            {t('About.Title2')}
                            </Box>
                            <Box className={styles.desc}>
                            {t('About.Desc1')}
                            </Box>
                  
                        </Box>


                        <Box  className={styles.rightCon}>
                            <img className={styles.artistImg} src={ArtistImg}/>
                            <Box className={styles.imgNameContainer}>
                            <Box className={styles.imgName1}>Thomas</Box>
                            <Box className={styles.imgName2}>Anders</Box>
                            </Box>
                        </Box>
                    </Box>


                </Box>
            </Box>
        </>
    )
}