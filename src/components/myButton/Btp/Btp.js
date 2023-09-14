import { Box } from '@mui/material'
import Ticket from '../../../Image/ticket.svg'
import { useTranslation } from 'react-i18next';
import styles from './btp.module.css'

export default function Btp() {
  const { t, i18n } = useTranslation()

    return (
        <>   <Box className={`${styles.buttonContainer}`}>
            <Box className={`${styles.buyTicket} flex items-center`}>
                {t('Button.buyTicket')}
            </Box>
            <Box style={{ padding: '14px 8px', minWidth: '36px', maxHeight: '48px' }} className={`${styles.buyTicketIcon} rounded-lg`} >
                <img className={styles.icon} src={Ticket} />
            </Box>
        </Box>
        </>
    )
}