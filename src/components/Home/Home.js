import SplideSlider from "./SplideSlider/SplideSlider";
import Content from "./Content/Content";
import { Box } from "@mui/material";
export default function Home() {
    return (
        <>
            <Box style={{position: 'relative', top: '-113.6px', zIndex: '-1'}} className='bg-main py-36  xl:py-0 sm:py-44'>
                <Box className='xl:w-10/12 mx-auto'>
                    <Box className='xl:flex block justify-between items-center'>
                        <Content />
                        <SplideSlider />
                    </Box>
                </Box>
            </Box>
        </>
    )
}