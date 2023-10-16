import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import './style.css'
import col1i1 from '../../../Image/Slider/col1i1.png'
import col1i2 from '../../../Image/Slider/col1i2.png'
import col1i3 from '../../../Image/Slider/col1i3.png'
import col2i1 from '../../../Image/Slider/col2i1.png'
import col2i2 from '../../../Image/Slider/col2i2.png'
import col2i3 from '../../../Image/Slider/col2i3.png'
import col3i1 from '../../../Image/Slider/col3i1.png'
import col3i2 from '../../../Image/Slider/col3i2.png'
import col3i3 from '../../../Image/Slider/col3i3.png'
export default function SplideSlider() {
  return (
    <Splide
      options={{
        direction: 'rtl',
        // height   : '240px',
        // width: '100vh',
        type: "loop",
        // gap: "10px",
        drag: false,
        arrows: false,
        pagination: false,
        perPage: 4,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: -2
        }
      }}
      className="pb-8"
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col1i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col1i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col1i3} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col2i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col2i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col2i3} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col3i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col3i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img className=" md:w-48 md:h-60 rounded-3xl" src={col3i3} alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
}
