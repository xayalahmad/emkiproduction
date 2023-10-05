import { Box } from "@mui/material";
import EventsCard from "./EventsCard/EventsCard";
import Pb from "../myButton/Pb/Pb";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './Events.module.css'


export default function Events({filter}){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const languageLocalId = localStorage.getItem('langId');

  const { language } = useSelector(state => state.language)
  const [eventsAll, setEventsAll ] = useState([])
  console.log(eventsAll);
  let filteredArr = eventsAll.slice(eventsAll.length-3, eventsAll.length)
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
      <Box className=
  'mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40 md:pt-40 xl:pt-40 pb-32 sm:pb-40 md:pb-40 xl:pb-40 '
>
        <Pb  button='Events'/>
        <Box className={styles.cardsContainer}>

{/* {filter ? 

filteredArr?.reverse().map((q, i) => 
     <EventsCard key={i} event={q}/> )
: 
eventsAll?.reverse().map((q, i) => 
     <EventsCard key={i} event={q}/> )

)
   */}
{/* } */}
{filter ?
filteredArr?.map((q, i) => 
<EventsCard key={i} event={q}/> )
  :
  eventsAll?.map((q, i) => 
  <EventsCard key={i} event={q}/> )
}
        </Box>
        </Box>
        </>
    )
}