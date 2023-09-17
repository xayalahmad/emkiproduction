import SplideSlider from "./SplideSlider/SplideSlider";
import Content from "./Content/Content";
import { Box } from "@mui/material";
export default function Home() {
    return (
        <>
            <Box className='bg-main'>
                <Box className='xl:w-10/12 mx-auto'>
                    <Box className='xl:flex block justify-between items-center' >
                        <Content />
                        <SplideSlider />
                    </Box>
                        <SplideSlider />
                        <SplideSlider />
                </Box>
            </Box>
        </>
    )
}