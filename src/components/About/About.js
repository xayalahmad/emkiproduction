import { Box } from "@mui/material"
import AboutHome from "./AboutHome"
import Slider from "./AboutSlider/Slider"
export default function About() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return (
        <>
            <AboutHome />
            <Slider/>
        </>
    )
}