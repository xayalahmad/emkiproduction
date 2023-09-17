import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import eventImage from '../../../Image/Events/eventImage.png'
import ellipse from '../../../Image/ellipse.svg'
import styles from './EventsCard.module.css'
import { useTranslation } from 'react-i18next';

export default function EventsCard() {
  const { t, i18n } = useTranslation()

  return (
    <Card 
    className={styles.card}
    sx={{ maxWidth: 370, boxShadow: 0 }}>
      {/* <CardActionArea> */}
      {/* <Box className={styles.ticketContainer}> */}

{/* </Box>  */}
<Box className={styles.imageContainer}>
<Box className={styles.ticket} gutterBottom component="div">
{t('Button.readMore')}
</Box>

        <CardMedia
        sx={{ maxWidth: 370, maxHeight:  370 , boxShadow: 0 }}
          className={styles.image}
          component="img"
          height="140"
          image={eventImage}
          alt="Event image"
          />
          </Box>

        <CardContent className={styles.content}>
          <Box className='flex justify-between'>
          <Box className={styles.title} gutterBottom component="div">
          Serdar Ortaç 
          </Box>
          <Box className={styles.price}>
          30₼ - 300₼
          </Box>
          </Box>
          <Box className='flex'>

          <Box className={styles.date}>
          16 October 2023 
          </Box>
          <img className={styles.ellipse} src={ellipse}/>
          <Box className={styles.hall}>
          Heydər Əliyev Sarayı
          </Box>
          </Box>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}