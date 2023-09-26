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
                    backgroundImage: `url(${aboutImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    borderRadius: '0 0 40px 40px',
                    backgroundColor: '#151A30'
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
                            <Box className={styles.desc}>
                            {t('About.Desc2')}
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