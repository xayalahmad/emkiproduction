import SplideSlider from "./SplideSlider/SplideSlider";
import Content from "./Content/Content";
import { Box } from "@mui/material";
import OurValues from "../OurValues/OurValues";
import Events from "../Events/Events";
import Blog from "../Blog/Blog";
import SponsorHome from "../Sponsor/SponsorHome/SponsorHome";
export default function Home() {
    return (
        
        <>
            <Box 
               style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    background: 'linear-gradient(257deg, #151A30 0%, #211D4D 28%, #271630 70%, #0F1836 100%), linear-gradient(0deg, rgba(21, 26, 48, 0.40) 0%, rgba(21, 26, 48, 0.40) 100%)',
                    borderRadius: '0 0 32px 32px',
                }}
            className=''>
                <Box className='xl:w-10/12 mx-auto'>
                    <Box className='xl:flex block justify-between items-center' >
                        <Content />
                        <SplideSlider />
                    </Box>
                </Box>
            </Box>
                <Events filter={3}/>
                    <OurValues/>
                    <Blog filter={2}/>
                    <SponsorHome filter={2}/>
        </>
    )
}