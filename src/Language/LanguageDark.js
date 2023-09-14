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
export default function Language({ color, bgColor }) {
  const dispatch = useDispatch()
  const { language } = useSelector(state => state.language)
  const { t, i18n } = useTranslation()

  const clickHandle = lang => {
    dispatch(setLanguage(lang))
    i18n.changeLanguage(lang)
  }



  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ minWidth: 70 }}>
        {language ?
          <Box className={`${styles.item} ${styles.language}  ${styles.languageDark}`}>
            {language}
          </Box>
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
          <MenuItem onClick={() => clickHandle('AZ')} className={styles.item} value={10}><Box className={styles.item}>AZ</Box>
          </MenuItem>
          <MenuItem onClick={() => clickHandle('EN')} value={20}><Box className={styles.item}>EN</Box></MenuItem>
          <MenuItem onClick={() => clickHandle('RU')} value={30}><Box className={styles.item}>RU</Box></MenuItem>
        </Select>

      </FormControl>
    </>
  );
}