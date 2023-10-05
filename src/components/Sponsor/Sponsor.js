import { Box } from "@mui/material";
import SponsorCompany from "./SponsorCardSection/SponsorCompany";
import SponsorHome from "./SponsorHome/SponsorHome";
import OurValues from "../OurValues/OurValues";
export default function Sponsor(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return(
        <>
<SponsorHome/>
                <Box className='mx-auto w-11/12 sm:w-4/5'>
        <SponsorCompany/>
                </Box>
        <OurValues/>
        </>
    )
}