import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import './style.css'
import col1i1 from '../../../Image/Slider/col1i1.png'
import col1i2 from '../../../Image/Slider/col1i2.png'
import col1i3 from '../../../Image/Slider/col1i3.png'
export default function SplideSlider() {
  return (
    <Splide
      options={{
        direction: 'ttb',
        height   : '100vh',
        // fixedHeight: 'calc(100vh - 113.6px)',  
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
          speed: -2
        }
      }}
      className=" "
      extensions={{ AutoScroll }}
    >
      <SplideSlide style={{minWidth: '192px'}}>
        <img className="w-48 h-60 rounded-3xl" src={col1i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide style={{minWidth: '176px'}}>
        <img className="w-48 h-60 rounded-3xl" src={col1i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide style={{minWidth: '176px'}}>
        <img className="w-48 h-60 rounded-3xl" src={col1i3} alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
}
