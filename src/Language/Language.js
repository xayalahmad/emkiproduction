import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import styles from './Language.module.css'
import { Box } from '@mui/material';
export default function Language() {

  const {t, i18n} = useTranslation()

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ minWidth: 70 }}>
        <Select
         sx={{
            color: "white",
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#151A30',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#151A30',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#151A30',
            },
            '.MuiSvgIcon-root ': {
              fill: "white !important",
            }
          }}
         className='h-10'
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem onClick={() => clickHandle('AZ')} className={styles.item} value=""><Box className={styles.item}>AZ</Box>
          </MenuItem>
          <MenuItem onClick={() => clickHandle('EN')}  value={20}><Box className={styles.item}>EN</Box></MenuItem>
          <MenuItem onClick={() => clickHandle('RU')}  value={30}><Box className={styles.item}>RU</Box></MenuItem>
        </Select>
      </FormControl>
    </>
  );
}