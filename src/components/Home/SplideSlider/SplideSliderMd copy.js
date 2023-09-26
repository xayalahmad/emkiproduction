import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import './style.css'
import col1i1 from '../../../Image/Slider/col1i1.jpg'
import col1i2 from '../../../Image/Slider/col1i2.jpg'
import col1i3 from '../../../Image/Slider/col1i3.jpg'
import col2i1 from '../../../Image/Slider/col2i1.jpg'
import col2i2 from '../../../Image/Slider/col2i2.jpg'
import col2i3 from '../../../Image/Slider/col2i3.jpg'
import col3i1 from '../../../Image/Slider/col3i1.jpg'
import col3i2 from '../../../Image/Slider/col3i2.jpg'
import col3i3 from '../../../Image/Slider/col3i3.jpg'
export default function SplideSlider() {
  return (
    <Splide
      options={{
        direction: 'rtl',
        // height   : '240px',
        width: '100%',
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
      className="bg-main "
      extensions={{ AutoScroll }}
    >
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">bunun adı vapşeeeee çoooox uzunduuuuuuuu baya baya uzun</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col1i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col1i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col1i3} alt="Image 2" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col2i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col2i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col2i3} alt="Image 2" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col3i1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">ad soyad</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col3i2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide className="mx-auto flex-col items-center justify-center">
        <div style={{width: '100%', textAlign: 'center', position: 'relative', top: '80px', backgroundColor: '#fff', opacity: '0.7', borderRadius: '22px 22px 0 0'}} className="md:w-32 text-center h-20 mx-auto flex justify-center items-center">bunun adı çox uzundu baya baya uzundu</div>
        <img className=" md:w-full md:h-auto rounded-3xl text-center flex justify-center items-center" src={col3i3} alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
}
