import { Box } from "@mui/material";
import Pb from "../myButton/Pb/Pb";
import styles from './OurValues.module.css'
import rec1 from '../../Image/OurValues/rectangle1.svg'
import rec2 from '../../Image/OurValues/rectangle2.svg'
import rec3 from '../../Image/OurValues/rectangle3.svg'
import rec4 from '../../Image/OurValues/rectangle4.svg'
export default function OurValues() {
    <div style="width: 100%; height: 100%; background: linear-gradient(257deg, #151A30 0%, #211D4D 28%, #271630 70%, #0F1836 100%), linear-gradient(0deg, rgba(21, 26, 48, 0.40) 0%, rgba(21, 26, 48, 0.40) 100%)"></div>
    return (
        <>
            <Box
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    background: 'linear-gradient(257deg, #151A30 0%, #211D4D 28%, #271630 70%, #0F1836 100%), linear-gradient(0deg, rgba(21, 26, 48, 0.40) 0%, rgba(21, 26, 48, 0.40) 100%)'
                }}
            >
                <Box className='mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-16 sm:pt-16 md:pt-16 xl:pt-16  pb-14 sm:pb-14 md:pb-14 xl:pb-14 '>

                    <Pb button='OurValues' />
                    <Box className='block xl:flex justify-between  xl:mb-24'>

                        <Box className={`${styles.container} md:w-3/4 xl:w-5/12`}>
                            <img src={rec1} />
                            <Box className={`${styles.content} md:ml-10`}>
                                <Box className={styles.title}>Trust</Box>
                                <Box className={styles.text}>We always give frank feedback and actionable advice to help you see the big picture.</Box>
                            </Box>
                        </Box>

                        <Box className={`${styles.container} md:w-3/4 xl:w-5/12`}>
                            <img src={rec2} />
                            <Box className={`${styles.content} md:ml-10`}>
                                <Box className={styles.title}>Transparency</Box>
                                <Box className={styles.text}>We cut through the noise to provide a clear sense of direction.</Box>
                            </Box>
                        </Box>

                    </Box>

                    <Box className='block xl:flex justify-between'>

<Box className={`${styles.container} md:w-3/4 xl:w-5/12`}>
    <img src={rec3} />
    <Box className={`${styles.content} md:ml-10`}>
        <Box className={styles.title}>Innovation</Box>
        <Box className={styles.text}>Our events have been meticulously built and match the ambition of modern businesses.</Box>
    </Box>
</Box>

<Box className={`${styles.container} md:w-3/4 xl:w-5/12`}>
    <img src={rec4} />
    <Box className={`${styles.content} md:ml-10`}>
        <Box className={styles.title}>Collaboration</Box>
        <Box className={styles.text}>We approach every engagement with confidence in our ability to forge a long-term relationships.</Box>
    </Box>
</Box>

</Box>

                </Box>

            </Box>
        </>
    )
}
