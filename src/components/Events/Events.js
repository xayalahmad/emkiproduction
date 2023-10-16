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
  let filteredArr = eventsAll.slice(0, 3)
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('http://logicbackend-001-site1.htempurl.com/api/Announcement/translation', {
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
   {filter ?
   
   <Box className=
   'mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-16 sm:pt-16 md:pt-16 xl:pt-16 pb-8 sm:pb-8 md:pb-8 xl:pb-8 '
 >
         <Pb  button='DiscoverEvents'/>
         <Box className={styles.cardsContainer}>
         {filteredArr?.map((q, i) => 
 <EventsCard key={i} event={q}/> )}
         </Box>
         </Box>
   :
  
   <Box className=
   'mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40 md:pt-40 xl:pt-40 pb-32 sm:pb-40 md:pb-40 xl:pb-40 '
 >
         <Pb  button='Events'/>
         <Box className={styles.cardsContainer}>
         {eventsAll?.map((q, i) => 
 <EventsCard key={i} event={q}/> )}
         </Box>
         </Box>
  }   

        </>
    )
}

