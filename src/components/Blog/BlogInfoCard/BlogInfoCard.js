import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import styles from './BlogInfoCard.module.css'
import Blog from '../Blog';
export default function BlogInfoCard(){
    const { selectedBlog } = useSelector(state => state.selectedBlog)


const { language } = useSelector(state => state.language)
const [blogAll, setBlogAll ] = useState([])
useEffect(() => {
    console.log(language);
    // const getUsers = async () => {
      fetch(`http://logicbackend-001-site1.htempurl.com/api/PostTranslation?postId=${selectedBlog.id}&languageId=${language}`, {
        headers: {
            'languageId': language ? language : 1
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlogAll(data)
      })
      .catch(err => console.log(err))
    // }
    // getUsers()
}, [language])

useEffect(() => {
  console.log(language);
  // const getUsers = async () => {
    fetch(`http://logicbackend-001-site1.htempurl.com/api/PostTranslation?postId=${selectedBlog.id}&languageId=${language}`, {
      headers: {
          'languageId': language ? language : 1
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setBlogAll(data)
    })
    .catch(err => console.log(err))
  // }
  // getUsers()
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}, [selectedBlog])

    return(
        <>
             <Box className='

mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40
'>
            <Box >
      <Box>
        <CardMedia
          component="img"
          // width="100%"
          className={styles.infoImg}
          // height="140"
          image={blogAll?.imageSrc}
          alt={blogAll?.title}
        />
        <Box style={{border: 0}}>
          <Typography className={styles.infoTitle} gutterBottom component="div">
          {blogAll?.title}
          </Typography>
          <Typography  className={styles.infoText} >
          {blogAll?.content}
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>

        </>
    )
}