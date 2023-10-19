import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import BlogImage from '../../../Image/Blog/BlogImg.png'
import ellipse from '../../../Image/ellipse.svg'
import styles from './Blog.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { setB } from '../../../stores/mood';
import { setSelectedBlog } from '../../../stores/selectedBlog';

export default function BlogCard({blog}) {
  const dispatch = useDispatch()
  const { selectedBlog } = useSelector(state => state.selectedBlog)
  const { t, i18n } = useTranslation()
// console.log(blog);
const BlogAdd = () => {
  dispatch(setSelectedBlog(blog))
}
  return (
        <Link onClick={BlogAdd} style={{height: '322px', marginBottom: '20px'}}  to='/blogdetail'>
    <Box 
    className={styles.card}
    sx={{ maxWidth: 375, boxShadow: 0 }}>
      {/* <CardActionArea> */}
      {/* <Box className={styles.ticketContainer}> */}

{/* </Box>  */}
<Box className={styles.imageContainer}>
<Box className={styles.ticket} gutterBottom component="div">
{t('Button.readMore')}
</Box>

        <CardMedia
        sx={{ maxWidth: 375,  height: '249.94px', maxHeight:  251 , boxShadow: 0 }}
          className={styles.image}
          component="img"
          // height="140"
            image={blog?.translations[0]?.imageSrc}
          alt={blog?.translations[0]?.title}
          />
          </Box>

          <div className={styles.titleDateContainer}>
          <div className={styles.title} gutterBottom component="div">
          {blog?.translations[0]?.title}
          </div>
          {/* <img className={styles.ellipse} src={ellipse}/> */}
         
          </div>
        <Box className={styles.content}>
          <Box className={styles.desc}>
          {/* {blog?.translations[0]?.content.split(' ').length > 10 ? `${blog?.translations[0]?.content}`  : blog?.translations[0]?.content} */}
          {blog?.translations[0]?.content}
          </Box>
       
        </Box>
      {/* </CardActionArea> */}
    </Box>
    </Link>
  );
}