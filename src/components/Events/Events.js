import { Box } from "@mui/material";
import EventsCard from "./EventsCard";

export default function Events(){
    return(
      <Box className='mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40'>
        <EventsCard/>
        </Box>
    )
}