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
export default function Language({ color, bgColor }) {
  const dispatch = useDispatch()
  
  const [getlang, setGetLang] = useState([]);
  const { language } = useSelector(state => state.language)
  const { t, i18n } = useTranslation()

  const clickHandle = (lang, id) => {
    dispatch(setLanguage(id))
    i18n.changeLanguage(lang)
  }


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const getUsers = async () => {
      await fetch('http://logicbackend-001-site1.htempurl.com/api/Language')
      .then(res => res.json())
      .then(data => setGetLang(data))
      .catch(err => console.log(err))
    }
    getUsers()
}, [])
console.log(getlang[2]);
  return (
    <>
      <FormControl sx={{ minWidth: 70 }}>
        {language ?
        ''
          // <Box className={`${styles.item} ${styles.language}  ${styles.languageDark}`}>
          //   {language}
          // </Box>
          :
          <Box className={`${styles.item} ${styles.language}  ${styles.languageDark}`}>
            AZ
          </Box>
        }
        
        <Select
          sx={{
            color: { color },
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
              fill: '#ffffff',
            },

          }}
          color='red'
          className='h-10'
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem onClick={() => clickHandle('AZ')} className={styles.item} value={10}><Box className={styles.item}>AZ</Box>
          </MenuItem>
          <MenuItem onClick={() => clickHandle('EN')} value={20}><Box className={styles.item}>EN</Box></MenuItem>
          <MenuItem onClick={() => clickHandle('RU')} value={30}><Box className={styles.item}>RU</Box></MenuItem> */}
    {getlang.map((q, i) => 
              <MenuItem key={i} onClick={() => clickHandle(`${q.title}`, `${q.id}`)}  value={q.id} ><Box className={styles.item}>{q.title}</Box></MenuItem>
              
            )}

        </Select>
        

      </FormControl>
    </>
  );
}