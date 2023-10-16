import { Box } from "@mui/material";
// import aboutImg from '../../Image/About  /aboutBg.png'
import styles from './SponsorHome.module.css'
import { useTranslation } from 'react-i18next';
// import ArtistImg from '../../Image/About/Artist.png'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
export default function SponsorHome({filter}) {

    const { t, i18n } = useTranslation()

    const { language } = useSelector(state => state.language)
    const [sponsorAll, setSponsorAll ] = useState([])
    useEffect(() => {
        console.log(language);
        // const getUsers = async () => {
          fetch(`http://logicbackend-001-site1.htempurl.com/api/About/translation?languageId=${language}`, {
          })
          .then(res => res.json())
          .then(data => {
            setSponsorAll(data)})
          .catch(err => console.log(err))
        // }
        // getUsers()
    }, [language])
console.log(sponsorAll);
    return (
        <>

            <Box
            >

{filter ? 
                <Box className='mx-auto sm:w-4/5 w-full mb-6 xl:mb-0 pt-16 sm:pt-16 md:pt-16 xl:pt-16  pb-14 sm:pb-14 md:pb-14 xl:pb-14 '>

   <Box
   className={styles.aboutBgHome}
>
<Box className='mx-auto '>

        <Box className={styles.homeBg}>
      <Box className=' mx-auto w-11/12 sm:w-full pt-16 sm:pt-0  md:pt-0 xl:pt-0'>
      <Box className={styles.container}>
          <Box className={styles.content}>
              <Box className={styles.title1}>
              {sponsorAll.title}
              </Box>
              <Box className={styles.desc}>
              {sponsorAll.content}
              </Box>
          
          </Box>


              <img className={styles.artistImg} src={sponsorAll.imageSrc}/>
          </Box>


  </Box>
  </Box>
  </Box>
  </Box>
  </Box>
:
<Box
style={{
    // backgroundColor: '#151A30',
}}
className={styles.aboutBg}
>
<Box className='mx-auto w-11/12 sm:w-4/5  pt-32 sm:pt-40  md:pt-40 xl:pt-40'>
<Box className={styles.container}>
    <Box className={styles.content}>
        <Box className={styles.title1}>
        {sponsorAll.title}
        </Box>
        <Box className={styles.desc}>
        {sponsorAll.content}
        </Box>
    
    </Box>


        <img className={styles.artistImg} src={sponsorAll.imageSrc}/>
    </Box>


</Box>
</Box>
}

          


                
            </Box>
        </>
    )
}