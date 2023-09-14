import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next';
import styles from './ContentButton.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function ContentButton() {
  const { t, i18n } = useTranslation()

    return (
        <>   <Box className={`${styles.buttonContainer}`}>
            <Box className={`${styles.buyTicket} flex items-center`}>
                {t('Button.events')}
            </Box>
                <ArrowForwardIcon className={styles.icon}/>
        </Box>
        </>
    )
}