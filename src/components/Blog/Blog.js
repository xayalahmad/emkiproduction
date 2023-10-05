import { Box } from "@mui/material";
import BlogCard from "./BlogCard/BlogCard";
import Pb from "../myButton/Pb/Pb";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import styles from './Blog.module.css'


export default function Blog({ filter }) {
  const languageLocalId = localStorage.getItem('langId');

  const { language } = useSelector(state => state.language)
  const [blogAll, setBlogAll] = useState([])
  let filteredArr = blogAll.slice(blogAll.length - 3, blogAll.length)

  useEffect(() => {
    console.log(language);
    // const getUsers = async () => {
    fetch('http://logicbackend-001-site1.htempurl.com/api/Post/translation/', {
      headers: {
        'languageId': languageLocalId ? languageLocalId : 5
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlogAll(data.reverse())
      })
      .catch(err => console.log(err))
    // }
    // getUsers()
  }, [language])





  return (
    <>
      <Box className='

mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40 pb-32 sm:pb-40  md:pb-40 xl:pb-40
'>
        <Pb button='Blog' className=' m-4' />
        <Box className={styles.cardsContainer}>

          {/* {otherBlogs == false  ? blogAll.map((q, i) => 

<BlogCard key={i} blog={q}/>

)  : ''} */}

          {filter ?
            filteredArr.map((q, i) =>
              <BlogCard key={i} blog={q} />
            )
            :
            blogAll.map((q, i) =>
              <BlogCard key={i} blog={q} />
            )
          }
        </Box>
      </Box>
    </>
  )
}