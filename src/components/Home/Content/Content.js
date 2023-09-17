import { Box } from "@mui/material";
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
// import DarkButton from '../../Button/DarkButton/Button'
// import LightButton from '../../Button/LightButton/Button'
import Ticket from '../../../Image/ticket.svg'
import Arrow from '../../../Image/arrow-right.svg'
import styles from './Content.module.css'
import Wtp from "../../myButton/Wtp/Wtp";
import ContentButton from "./ContentButton/ContentButton";
export default function Content() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Box className='mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-16'>

        <Box className={`${styles.font} ${styles.title}`}>
          {t('Home.Content.title')}
        </Box>
        <Box className={`${styles.font} ${styles.text} xl:w-5/6 md:w-5/6`} >
          {t('Home.Content.text')}
        </Box>
        <Box className='flex mt-9 '>
        <Box className='flex items-center mr-0 sm:mr-8'>
        <Wtp/>
        </Box>
          <ContentButton/>
      </Box>
      </Box>
    </>
  )
}