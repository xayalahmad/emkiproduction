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
import { Link } from 'react-router-dom';

export default function EventsCard({event}) {
  console.log(event);
  const { t, i18n } = useTranslation()
  return (
    <Link target={'_blank'} to={event?.translations[0]?.ticketLink}>
    <Card 
    className={styles.card}
    sx={{ maxWidth: 375, boxShadow: 0 }}>
      {/* <CardActionArea> */}
      {/* <Box className={styles.ticketContainer}> */}
{/* </Box>  */}
<Box className={styles.imageContainer}>
<Box className={styles.ticket} gutterBottom component="div">
{t('Button.readMore')}
</Box>

        <CardMedia
        sx={{ maxWidth: 375, width: 375, maxHeight:  375, boxShadow: 0 }}
          className={styles.image}
          component="img"
          height="140"
          image={event?.translations[0]?.imageSrc ? event?.translations[0]?.imageSrc : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
          alt="Event image"
          />
          </Box>

        <CardContent className={styles.content}>
          <Box className='flex justify-between'>
          <Box className={styles.title} gutterBottom component="div">
          {event?.translations[0]?.title}
          </Box>
          <Box className={styles.price}>
          {event?.minPrice} - {event?.maxPrice}₼
          </Box>
          </Box>
          <Box className='flex'>

          <Box className={styles.date}>
          {event?.date.split('T')[0]}
          </Box>
          <img className={styles.ellipse} src={ellipse}/>
          <Box className={styles.hall}>
          {event?.translations[0]?.place}
          </Box>
          </Box>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
    </Link>
  );
}