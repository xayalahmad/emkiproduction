import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import styles from './Language.module.css'
import { Box } from '@mui/material';
import { setLanguage } from '../stores/language';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
export default function Language({color, bgColor}) {
  const dispatch = useDispatch()
  const leftArrow = useRef()
  const rightArrow = useRef()
  const { language } = useSelector(state => state.language)
  const [getlang, setGetLang] = useState([]);
  const [langCode, setLangCode] = useState('');
  const {t, i18n} = useTranslation()
  
  const clickHandle = (q) => {
    console.log(q);
    dispatch(setLanguage(q.id))
    i18n.changeLanguage(q.code)
    setLangCode(q.code)
    console.log(language);
    localStorage.setItem('lang', q.code);
    localStorage.setItem('langId', q.id);
  }
  const [age, setAge] = React.useState('');
  const languageLocal = localStorage.getItem('lang');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  useEffect(() => {
    const getUsers = async () => {
      await fetch('https://emkiproduction.azurewebsites.net/api/Language')
      .then(res => res.json())
      .then(data => setGetLang(data))
      .catch(err => console.log(err))
    }
    getUsers()
}, [])
// leftArrow.onclick = function () {
//   document.getElementById('container').scrollLeft += 20;
// };
// rightArrow.onclick = function () {
//   document.getElementById('container').scrollLeft -= 20;
// };
  return (
    <>
    <Box className={styles.container}>

  
      <FormControl  sx={{ minWidth: 70 }}>
      {langCode ?
          
          // <Box className={`${styles.itemNav} ${styles.language}  ${styles.languageDark} z-10`}>
          //   {languageLocal}
          // </Box
          ''
          :
          <Box className={`${styles.itemNav} ${styles.language}  ${styles.languageDark}`}>
          {languageLocal}
        </Box>
        }
        <Select
           inputProps={{
            MenuProps: {
                MenuListProps: {
                    sx: {
                        backgroundColor: '#151a30'
                    }
                }
            }
        }}
         sx={{
          padding: 0,
            color: {color},
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: { bgColor },
              border: 'none'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: { bgColor },
              border: 'none'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: { bgColor },
              border: 'none'
            },
            '.MuiSvgIcon-root': {
                fill: '#fff',
            },
    
          }}
          color='red'
         className='h-10'
          value={age}
          onChange={handleChange}
          displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem onClick={() => clickHandle('AZ')} className={styles.item} value={10}><Box className={styles.item}>AZ</Box>
          </MenuItem>
          <MenuItem onClick={() => clickHandle('EN')}  value={20}><Box className={styles.item}>EN</Box></MenuItem>
          <MenuItem onClick={() => clickHandle('RU')}  value={30}><Box className={styles.item}>RU</Box></MenuItem> */}
     {getlang.map((q, i) => 
              <MenuItem key={i} onClick={() => clickHandle(q)}  value={q.id} ><Box className={styles.languageNav}>{q.code}</Box></MenuItem>
              
            )}
        </Select>
      </FormControl>
      </Box>
    </>
  );
}