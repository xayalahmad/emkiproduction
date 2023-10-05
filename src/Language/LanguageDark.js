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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
  const [getlang, setGetLang] = useState([]);
  const [langCode, setLangCode] = useState('');
  const { language } = useSelector(state => state.language)
  const { t, i18n } = useTranslation()
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
      await fetch('http://logicbackend-001-site1.htempurl.com/api/Language')
      .then(res => res.json())
      .then(data => setGetLang(data))
      .catch(err => console.log(err))
    }
    getUsers()
}, [])
  return (
    <>
      <FormControl sx={{ minWidth: 70 }}>
        {langCode ?
          ''
          :
          <Box className={`${styles.itemDark} ${styles.language}  ${styles.languageDark}`}>
            {languageLocal}
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
              <MenuItem key={i} onClick={() => clickHandle(q)}  value={q.id} ><Box className={styles.item}>{q.code}</Box></MenuItem>
              
            )}

        </Select>
        

      </FormControl>
    </>
  );
} 