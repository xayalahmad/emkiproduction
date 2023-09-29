import { Box } from "@mui/material";
import SliderXl from "./SliderXl";
import SliderMd from "./SliderMd";
import SliderSm from "./SliderSm";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";


export default function Slider(){


    const { language } = useSelector(state => state.language)
    const [artistsAll, setArtistsAll ] = useState([])
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('http://logicbackend-001-site1.htempurl.com/api/Artist', {
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
        <Box className='xl:flex hidden'>
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