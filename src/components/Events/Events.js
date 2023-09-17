import { Box } from "@mui/material";
import EventsCard from "./EventsCard/EventsCard";
import Pb from "../myButton/Pb/Pb";

export default function Events(){
    return(
      <>
      <Box className='

mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40
'>
        <Pb  button='Events'/>
        <Box className='flex justify-around flex-wrap'>

        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        </Box>
        </Box>
        </>
    )
}