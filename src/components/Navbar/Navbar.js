import { useEffect, useState } from "react";
import DarkNavbar from "./DarkNavbar/Navbar";
import LightNavbar from "./LightNavbar/Navbar";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMood } from "../../stores/mood";
import { setPage } from "../../stores/page";
export default function Navbar(){
  const dispatch = useDispatch()
  const currentColor = localStorage.getItem("navColor");
  const { mood } = useSelector(state => state.mood)
  const { page } = useSelector(state => state.page)
  const [navbarMode, setNavbarMode] = useState(false);
  useEffect(() => {
   
          if ( page ) {
            dispatch(setMood(true))
          } 
          else {
            dispatch(setMood(false))
          }
      });
    

    return(
        <>
        {mood && currentColor ? <LightNavbar/> : <DarkNavbar/> }
        </>
    )
}