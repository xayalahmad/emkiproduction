import { useEffect, useState } from "react";
import DarkNavbar from "./DarkNavbar/Navbar";
import LightNavbar from "./LightNavbar/Navbar";

export default function Navbar(){
    const [navbarMode, setNavbarMode] = useState(false);
    useEffect(() => {
        window.onscroll = function () { 
          if (window.scrollY < window.innerHeight - 112) {
            setNavbarMode(false)
        } 
        else {
            setNavbarMode(true)
          }
      };
      }, [window.scrollY]);
    

    return(
        <>
        {navbarMode ? <LightNavbar/> : <DarkNavbar/> }
        </>
    )
}