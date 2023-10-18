import { Box } from "@mui/material";
import EventsCard from "./EventsCard/EventsCard";
import Pb from "../myButton/Pb/Pb";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './Events.module.css'


export default function Events({filter}){
  const languageLocalId = localStorage.getItem('langId');

  const { language } = useSelector(state => state.language)
  const [eventsAll, setEventsAll ] = useState([])
  console.log(eventsAll);
  let filteredArr = eventsAll.slice(eventsAll.length-3, eventsAll.length)
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('https://emkiproduction.azurewebsites.net/api/Announcement/translation', {
            headers: {
                'languageId': languageLocalId ? languageLocalId : 5
            }
          })
          .then(res => res.json())
          .then(data => {console.log(data);
            setEventsAll(data.reverse())
          })
          .catch(err => console.log(err))
        // }
        // getUsers()
    }, [language])


    console.log(filteredArr);
    return(
      <>

  
   <Box className={styles.sidebarEventsContainer}
 >
         <Box className={styles.cardsContainer}>
         {eventsAll?.map((q, i) => 
 <EventsCard key={i} event={q}/> )}
         </Box>
         </Box>
  

        </>
    )
}

