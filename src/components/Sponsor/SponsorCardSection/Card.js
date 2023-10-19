import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Pb from "../../myButton/Pb/Pb";

import styles from './Card.module.css'


export default function Card({sponsorAll}) {
  return (
    <Box className={styles.cardBodySponsorpage}>
        <Pb  button='Sponsors'/>
      
      <Box className={styles.cardContainer}>


      {sponsorAll.length > 0 ? sponsorAll.map((q, i) => 
<>
<Box  className={styles.card}>
        <img  className={styles.cardImg} src={q.imageSrc} alt="Image 1" />
      </Box>


</>

)  : ''}


</Box>
</Box>

  );
}

// ${styles.slider}
// ${styles.sliderContainer}