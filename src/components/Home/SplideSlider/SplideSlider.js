import { Box } from "@mui/material"
import SplideSlider1 from "./SplideSlider1"
import SplideSlider2 from "./SplideSlider2"
import SplideSlider3 from "./SplideSlider3"
import SplideSlider4 from "./SplideSlider4"
export default function SplideSlider(){
    return(
        <>
        <Box className='w-4/5 mx-auto'>

        <Box className='xl:flex hidden '>
        <SplideSlider1/>
        <SplideSlider2/>
        <SplideSlider3/>
        </Box>
        </Box>
        <Box className='xl:hidden flex'>
        <SplideSlider4/>
        </Box>
        </>
    )
}