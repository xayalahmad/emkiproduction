import { Box } from "@mui/material";
import SliderXl from "./SliderXl";
import SliderMd from "./SliderMd";
import SliderSm from "./SliderSm";

export default function Slider(){
    return(
        <>
        <Box className='xl:flex hidden'>
        <SliderXl/>
        </Box>

        <Box className='xl:hidden md:flex hidden'>
        <SliderMd/>
        </Box>

        <Box className=' md:hidden flex'>
        <SliderSm/>
        </Box>
        </>
    )
}