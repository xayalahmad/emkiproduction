import { Box } from "@mui/material";
// import aboutImg from '../../Image/About/aboutBg.png'
import styles from './AboutHome.module.css'
import { useTranslation } from 'react-i18next';
import video from '../../Image/About/aboutVideo.mp4'
// import ArtistImg from '../../Image/About/Artist.png'
import Pb from "../myButton/Pb/Pb";
export default function AboutHome() {

    const { t, i18n } = useTranslation()


    return (
        <>
            <Box
                style={{
                    // backgroundImage: `url(${aboutImg})`,
                    borderRadius: '0 0 40px 40px',

                }}
                className={styles.aboutBg}
            >
                <Box className='mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40'>
                    <Box className={styles.container}>
                        <Box className={styles.content}>
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
                            <video controls loop autoPlay className={styles.artistImg} src={video}/>
                    </Box>


                </Box>
            </Box>
        </>
    )
}