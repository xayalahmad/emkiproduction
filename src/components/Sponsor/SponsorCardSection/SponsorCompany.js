import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Card from "./Card";
import { Box } from "@mui/material";

export default function SponsorCompany(){

    const { language } = useSelector(state => state.language)
    const [sponsorAll, setSponsorAll ] = useState([])
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('https://emkiproduction.azurewebsites.net/api/Sponsor', {
            headers: {
                'languageId': language ? language : 1
            }
          })
          .then(res => res.json())
          .then(data => {console.log(data);
            setSponsorAll(data)})
          .catch(err => console.log(err))
        // }
        // getUsers()
    }, [language])

    return(
        <>
        <Box className='pt-10'>

        <Card sponsorAll={sponsorAll}/>
        </Box>
        </>
    )
}