import { useEffect, useState } from "react";
import DarkNavbar from "./DarkNavbar/Navbar";
import LightNavbar from "./LightNavbar/Navbar";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMood } from "../../stores/mood";
export default function Navbar(){
  const dispatch = useDispatch()
  const currentColor = localStorage.getItem("navColor");
  const { mood } = useSelector(state => state.mood)
  const { page } = useSelector(state => state.page)
  console.log('mood' , mood);
  console.log(currentColor);
  const [navbarMode, setNavbarMode] = useState(false);
  useEffect(() => {
      console.log('page' , page);
        // window.onscroll = function () { 
          // if ( page ) {
          //   dispatch(setMood(true))
          // } 
          // else {
          //   dispatch(setMood(false))
          // }
      // };
      });
    

    return(
        <>
        {mood && currentColor ? <LightNavbar/> : <DarkNavbar/> }
        </>
    )
}