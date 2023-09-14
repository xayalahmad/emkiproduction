import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import eventImage from '../../Image/Events/eventImage.png'
// import styled, { css } from 'styled-components'
// const StyledCardActionArea = styled(CardActionArea)(({theme}) => `
//     .MuiCardActionArea-focusHighlight {
//         background: transparent;
//     }
// `);
// export default function EventsCard() {
  return (
    <Card sx={{ maxWidth: 406 }}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image={eventImage}
          alt="Event image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Serdar Ortaç 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          30₼ - 300₼
          </Typography>
          <Typography variant="body2" color="text.secondary">
          16 October 2023 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Heydər Əliyev Sarayı
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}