import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import './style.css'
import col2i1 from '../../../Image/Slider/col2i1.jpg'
import col2i2 from '../../../Image/Slider/col2i2.jpg'
import col2i3 from '../../../Image/Slider/col2i3.jpg'
export default function SplideSlider() {
  return (
    <Splide
      options={{
        direction: 'ttb',
        height   : '100vh',
        width: '192px',
        type: "loop",
        // gap: "10px",
        drag: false,
        arrows: false,
        pagination: false,
        perPage: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 2
        }
      }}
      className="bg-main mx-6"
      extensions={{ AutoScroll }}
    >
      <SplideSlide  style={{minWidth: '192px'}}>
        <img className="w-48 h-60 rounded-3xl" src={col2i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide  style={{minWidth: '192px'}}>
        <img className="w-48 h-60 rounded-3xl" src={col2i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide  style={{minWidth: '192px'}}>
        <img className="w-48 h-60 rounded-3xl" src={col2i3} alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
}
