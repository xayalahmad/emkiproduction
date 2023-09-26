import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// import './style.css'
import styles from './Slider.module.css'
import col1i1 from '../../../Image/Slider/col1i1.jpg'
import col1i2 from '../../../Image/Slider/col1i2.jpg'
import col1i3 from '../../../Image/Slider/col1i3.jpg'
import col2i1 from '../../../Image/Slider/col2i1.jpg'
import col2i2 from '../../../Image/Slider/col2i2.jpg'
import col2i3 from '../../../Image/Slider/col2i3.jpg'
import col3i1 from '../../../Image/Slider/col3i1.jpg'
import col3i2 from '../../../Image/Slider/col3i2.jpg'
import col3i3 from '../../../Image/Slider/col3i3.jpg'

export default function SliderXl() {
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
        pagination: true,
        perPage: 1,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 2
        },
      }}
      className={`${styles.slider} shadow-none`}
      extensions={{ AutoScroll }}
    >
      <SplideSlide style={{maxWidth: '400px'}} className={`${styles.sliderContainer} h-52`}>
        <div className={styles.sliderText}>bunun baya baya uzun</div>
        <img className={`${styles.sliderImg} h-52`} src='https://musictech.com/wp-content/uploads/2023/01/Skrillex@2000x1500.jpg' alt="Image 1" />
      </SplideSlide>
      <SplideSlide style={{maxWidth: '400px'}} className={`${styles.sliderContainer} h-52`}>
        <div className={styles.sliderText}>Kendrik Lamar soyad</div>
        <img className={`${styles.sliderImg} h-52`} src='https://www.thisdayinmusic.com/wp-content/uploads/2016/04/GettyImages-73908910.jpg' alt="Image 2" />
      </SplideSlide>
      <SplideSlide style={{maxWidth: '400px'}} className={`${styles.sliderContainer} h-52`}>
        <div className={styles.sliderText}>50 Cent</div>
        <img className={`${styles.sliderImg} h-52`} src='https://townsquare.media/site/204/files/2020/12/top-20-toc-artists.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89' alt="Image 2" />
      </SplideSlide>
      <SplideSlide style={{maxWidth: '400px'}} className={`${styles.sliderContainer} h-52`}>
        <div className={styles.sliderText}>Nas</div>
        <img className={`${styles.sliderImg} h-52`} src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2012%2F04%2F01-30-greatest-artists-adele_610.jpg' alt="Image 1" />
      </SplideSlide>
      <SplideSlide style={{maxWidth: '400px'}} className={`${styles.sliderContainer} h-52`}>
        <div className={styles.sliderText}>Thomas Anders</div>
        <img className={`${styles.sliderImg} h-52`} src='https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F221130104041-01-spotify-top-artists-2022.jpg' alt="Image 2" />
      </SplideSlide>
      <SplideSlide style={{maxWidth: '400px'}} className={`${styles.sliderContainer} h-52`}>
        <div className={styles.sliderText}>Serdar Ortaç</div>
        <img className={`${styles.sliderImg} h-52`} src='https://www.rap-up.com/wp-content/uploads/2023/04/weeknd-future-1014x531.jpg' alt="Image 2" />
      </SplideSlide>

    </Splide>
  );
}
