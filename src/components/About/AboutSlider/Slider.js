import { Box } from "@mui/material";
import SliderXl from "./SliderXl";
import SliderMd from "./SliderMd";
import SliderSm from "./SliderSm";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Pb from "../../myButton/Pb/Pb";


export default function Slider(){


    const { language } = useSelector(state => state.language)
    const [artistsAll, setArtistsAll ] = useState([])
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('https://emkiproduction.azurewebsites.net/api/Artist', {
            headers: {
                'languageId': language ? language : 1
            }
          })
          .then(res => res.json())
          .then(data => {console.log(data);
            setArtistsAll(data)})
          .catch(err => console.log(err))
        // }
        // getUsers()
    }, [language])


console.log(artistsAll);

    return(
        <>
   <Box className=
   'mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-10'
 >
         <Pb  button='About'/>
        </Box>

        <Box className='xl:flex hidden p-0'>
        <SliderXl artistsAll={artistsAll}/>
        </Box>

        <Box className='xl:hidden md:flex hidden'>
        <SliderMd artistsAll={artistsAll}/>
        </Box>

        <Box className=' md:hidden flex'>
        <SliderSm artistsAll={artistsAll}/>
        </Box>
        </>
    )
}