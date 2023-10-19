import { Box } from "@mui/material";
import Pb from "../myButton/Pb/Pb";
import styles from './OurValues.module.css'
import rec1 from '../../Image/OurValues/rectangle1.svg'
import rec2 from '../../Image/OurValues/rectangle2.svg'
import rec3 from '../../Image/OurValues/rectangle3.svg'
import rec4 from '../../Image/OurValues/rectangle4.svg'
import { useTranslation } from 'react-i18next';

export default function OurValues() {
    const { t, i18n } = useTranslation()
    return (
        <>
            <Box
            // style={{
            //     backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat',
            //     background: 'linear-gradient(257deg, #151A30 0%, #211D4D 28%, #271630 70%, #0F1836 100%), linear-gradient(0deg, rgba(21, 26, 48, 0.40) 0%, rgba(21, 26, 48, 0.40) 100%)'
            // }}
            >
                <Box className='mx-auto sm:w-4/5 w-full mb-6 xl:mb-0 pt-16 sm:pt-16 md:pt-16 xl:pt-16  pb-8 sm:pb-8 md:pb-8 xl:pb-8 '>
                    <Box className={styles.web}>
                        {t('Button.OurValues')}
                    </Box>
                    <Box className={styles.gradient}>
                        <Box className='mx-auto w-11/12 sm:w-full'>
                            <Box className={styles.mobile}>
                                {t('Button.OurValues')}
                            </Box>
                            <Box className='block xl:flex justify-between '>

                                <Box className={`${styles.container} w-full  xl:w-6/12  mr-7  xl:mb-20 mb-8`}>
                                    <img className={styles.ourValuesImage} src={rec1} />
                                    <Box className={`${styles.content} md:ml-3 ml-4 w-full`}>
                                        <Box className={styles.title}>{t('OurValues.Desc1')}</Box>
                                        <Box className={styles.text}>{t('OurValues.Title1')}</Box>
                                    </Box>
                                </Box>

                                <Box className={`${styles.container} w-full xl:w-6/12 xl:mb-20 mb-8 `}>
                                    <img className={styles.ourValuesImage} src={rec2} />
                                    <Box className={`${styles.content} md:ml-3 ml-4 w-full`}>
                                        <Box className={styles.title}>{t('OurValues.Desc2')}</Box>
                                        <Box className={styles.text}>{t('OurValues.Title2')}</Box>
                                    </Box>
                                </Box>

                            </Box>

                            <Box className='block xl:flex justify-between'>

                                <Box className={`${styles.container} w-full xl:w-6/12 mr-7 xl:mb-0 mb-8`}>
                                    <img className={styles.ourValuesImage} src={rec3} />
                                    <Box className={`${styles.content} md:ml-3 ml-4 w-full`}>
                                        <Box className={styles.title}>{t('OurValues.Desc3')}</Box>
                                        <Box className={styles.text}>{t('OurValues.Title3')}</Box>
                                    </Box>
                                </Box>

                                <Box className={`${styles.container} w-full xl:w-6/12`}>
                                    <img className={styles.ourValuesImage} src={rec4} />
                                    <Box className={`${styles.content} md:ml-3 ml-4 w-full`}>
                                        <Box className={styles.title}>{t('OurValues.Desc4')}</Box>
                                        <Box className={styles.text}>{t('OurValues.Title4')}</Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </>
    )
}
