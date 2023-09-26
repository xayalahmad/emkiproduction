import { Box } from '@mui/material';
import styles from './Pb.module.css'
import { useTranslation } from 'react-i18next';

export default function Pb({button}){
  const { t, i18n } = useTranslation()

    return(
        <>
        <Box className={styles.button}>
        {t(`Button.${button}`)}
        </Box>
        </>
    )
}