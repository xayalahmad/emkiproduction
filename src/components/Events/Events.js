import { Box } from "@mui/material";
import EventsCard from "./EventsCard/EventsCard";
import Pb from "../myButton/Pb/Pb";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Events({filter}){
  const { language } = useSelector(state => state.language)
  const [eventsAll, setEventsAll ] = useState([])
  console.log(eventsAll);
  let filteredArr = eventsAll.slice(eventsAll.length-3, eventsAll.length)
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('http://logicbackend-001-site1.htempurl.com/api/Announcement/translation', {
            headers: {
                'languageId': language ? language : 1
            }
          })
          .then(res => res.json())
          .then(data => {console.log(data);
            setEventsAll(data)
          })
          .catch(err => console.log(err))
        // }
        // getUsers()
    }, [language])


console.log(filteredArr);
    return(
      <>
      <Box className='

mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40
'>
        <Pb  button='Events'/>
        <Box className='flex justify-around flex-wrap'>
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
filteredArr?.reverse().map((q, i) => 
<EventsCard key={i} event={q}/> )
  :
  eventsAll?.reverse().map((q, i) => 
  <EventsCard key={i} event={q}/> )
}
        </Box>
        </Box>
        </>
    )
}