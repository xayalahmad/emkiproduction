import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// import './style.css'
import styles from './Slider.module.css'


export default function SliderXl({artistsAll}) {
  return (
    <Splide
        options={{
          direction: 'ltr',
          // height   : '240px',
          width: '100%',
          type: "loop",
          // gap: "10px",
          drag: true,
          arrows: true,
          pagination: false,
          perPage: 2,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 2
          },
        }}
      className={`${styles.slider} shadow-none`}
      // extensions={{ AutoScroll }}
    >
         {artistsAll.length > 0 ? artistsAll.map((q, i) => 

<SplideSlide  style={{maxWidth: '500px'}} className={`${styles.sliderContainer} h-72`}>
  <div className={styles.sliderText}>{q.name}</div>
  <img className={`${styles.sliderImg} h-72`} src={q.imageSrc} alt="Image 1" />
</SplideSlide>

)  : ''}


    </Splide>
  );
}
