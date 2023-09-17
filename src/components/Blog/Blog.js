import { Box } from "@mui/material";
import BlogCard from "./BlogCard/BlogCard";
import Pb from "../myButton/Pb/Pb";

export default function Blog(){
    return(
      <>
      <Box className='

mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-32 sm:pt-40  md:pt-40 xl:pt-40
'>
        <Pb button='Blog' className=' m-4'/>
        <Box className='flex justify-around flex-wrap'>

        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </Box>
        </Box>
        </>
    )
}