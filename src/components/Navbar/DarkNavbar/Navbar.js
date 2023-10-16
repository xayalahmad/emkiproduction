import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../../Image/emkiLogoLight.svg'
import BasicButton from '../BasicButton/BasicButton'
import { useTranslation } from 'react-i18next';
import Ticket from '../../../Image/ticket.svg'
import Language from '../../../Language/LanguageNavbar';
import styles from './Navbar.module.css'
import Drawer from './Drawer';
import { Link } from "react-router-dom";
import Wtp from '../../myButton/Wtp/Wtp';
import { useDispatch } from 'react-redux';
import { setMood } from '../../../stores/mood';
import { setPage } from '../../../stores/page';
import EventsDrawer from '../../EventsSideBar/Drawer/Drawer';

function DarkNavbar() {
  const dispatch = useDispatch()
  // const { language } = useSelector(state => state.language)

  const { t, i18n } = useTranslation()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const changeMoodFalse = () => {
    dispatch(setMood(false))
    dispatch(setPage(false))
    localStorage.setItem('navColor', false);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }
  const changeMoodTrue = () => {
    dispatch(setMood(true))
    dispatch(setPage(true))
    localStorage.setItem('navColor', true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <AppBar position='fixed' elevation={0} style={{ backgroundColor: 'transparent', border: '0px' }} className={`${styles.appBar} `} >
      <Box fixed={true}  className={styles.navbar} >
        {/* <Box disableGutters> */}
          <Box className='flex items-center justify-between w-full'>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

              <Drawer />
     </Box>
            <Box>
              <Link onClick={changeMoodFalse} to="/">{" "}
                <img className={styles.logoNavbar} src={Logo} />
              </Link>
            </Box>
            <Box
              className={styles.items}
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link onClick={changeMoodFalse} to="/">{" "}
                <BasicButton mode={true} name={t('Navbar.Home')}></BasicButton>
              </Link>

              <Link onClick={changeMoodFalse} to="/events">{" "}
                <BasicButton mode={true} name={t('Navbar.Events')}></BasicButton>
              </Link>

              <Link onClick={changeMoodFalse} to="/blog">{" "}
                <BasicButton mode={true} name={t('Navbar.Blog')}></BasicButton>
              </Link>

              <Link onClick={changeMoodFalse} to="/sponsor">{" "}
                <BasicButton mode={true} name={t('Navbar.Sponsors')}></BasicButton>
              </Link>

              <Link onClick={changeMoodFalse} to="/about">{" "}
                <BasicButton mode={true} name={t('Navbar.About')}></BasicButton>
              </Link>







            </Box>
            <Box className='flex items-center'>
                <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
                  <Language color={'white'} bgColor={'#151A30'} />
                </Box>
              <Box>
                <EventsDrawer/>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                </Menu>
              </Box>
            </Box>
          </Box>
        {/* </Box> */}
      </Box>
    </AppBar>
  );
}
export default DarkNavbar;