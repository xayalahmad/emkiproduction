import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import BlogImage from '../../../Image/Blog/BlogImg.png'
import ellipse from '../../../Image/ellipse.svg'
import styles from './Blog.module.css'
import { useTranslation } from 'react-i18next';

export default function EventsCard() {
  const { t, i18n } = useTranslation()

  return (
    <Card 
    className={styles.card}
    sx={{ maxWidth: 574, boxShadow: 0 }}>
      {/* <CardActionArea> */}
      {/* <Box className={styles.ticketContainer}> */}

{/* </Box>  */}
<Box className={styles.imageContainer}>
<Box className={styles.ticket} gutterBottom component="div">
{t('Button.readMore')}
</Box>

        <CardMedia
        sx={{ maxWidth: 574, maxHeight:  251 , boxShadow: 0 }}
          className={styles.image}
          component="img"
          height="140"
          image={BlogImage}
          alt="Event image"
          />
          </Box>

          <div className={styles.titleDateContainer}>
          <div className={styles.title} gutterBottom component="div">
          Thomas Anders’s Baku concert
          </div>
          <img className={styles.ellipse} src={ellipse}/>
          <div className={styles.date}>
          12 October 2022
          </div>
          </div>
        <Box className={styles.content}>
          <Box className={styles.desc}>
          Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in...
          </Box>
          <Box className='flex'>

     

          </Box>
        </Box>
      {/* </CardActionArea> */}
    </Card>
  );
}