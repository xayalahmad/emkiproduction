import { Box } from "@mui/material";
import BlogCard from "./BlogCard/BlogCard";
import Pb from "../myButton/Pb/Pb";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";



export default function Blog(){
    
    const { language } = useSelector(state => state.language)
    const [blogAll, setBlogAll ] = useState([])
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch('http://logicbackend-001-site1.htempurl.com/api/Post/translation/', {
            headers: {
                'languageId': language ? language : 1
            }
          })
          .then(res => res.json())
          .then(data => {console.log(data);
            setBlogAll(data)})
          .catch(err => console.log(err))
        // }
        // getUsers()
    }, [language])



    return(
      <>
      <Box className='

mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40
'>
        <Pb button='Blog' className=' m-4'/>
        <Box className='flex justify-around flex-wrap'>

        {blogAll.length > 0 ? blogAll.reverse().map((q, i) => 

<BlogCard key={i} blog={q}/>

)  : ''}
        </Box>
        </Box>
        </>
    )
}