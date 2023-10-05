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
import Logo from '../../../Image/emkiLogoDark.svg'
import BasicButton from '../BasicButton/BasicButton'
import { useTranslation } from 'react-i18next';
import Ticket from '../../../Image/ticket.svg'
import Language from '../../../Language/LanguageLight';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import Drawer from './Drawer';
import Btp from '../../myButton/Btp/Btp';
import { useDispatch } from 'react-redux';
import { setMood } from '../../../stores/mood';
import { setPage } from '../../../stores/page';

function LightNavbar() {
  const dispatch = useDispatch()

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
    
  }
  const changeMoodTrue = () => {
    dispatch(setMood(true))
    dispatch(setPage(true))
    localStorage.setItem('navColor', true);

  }
  return (
    <AppBar position='fixed' elevation={0} style={{backgroundColor: 'transparent', border: '0px'}} className='sm:px-12 px-6' >
      <Container fixed={true} style={{backgroundColor: '#fff', borderRadius: '0 0 24px 24px', padding: '24px 32px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px'}}  className='mx-2 bg-main ' maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
          
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <Drawer/>
          </Box>
          <Box className='flex items-center justify-between w-full'>
          <Link onClick={changeMoodFalse} to="/">{" "}
          <img src={Logo} />
          </Link>
          <Box
           className={styles.items} 
           sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link onClick={changeMoodFalse} to="/">{" "}
              <BasicButton mode={false} name={t('Navbar.Home')}></BasicButton>
                 </Link>

                 <Link onClick={changeMoodTrue} to="/events">{" "}
                 <BasicButton mode={false} name={t('Navbar.Events')}></BasicButton>
                 </Link>

                 <Link onClick={changeMoodTrue} to="/blog">{" "}
              <BasicButton mode={false} name={t('Navbar.Blog')}></BasicButton>
                 </Link>

                 <Link onClick={changeMoodFalse} to="/sponsor">{" "}
              <BasicButton mode={false} name={t('Navbar.Sponsors')}></BasicButton>
                 </Link>

                 <Link onClick={changeMoodFalse} to="/about">{" "}
              <BasicButton mode={false} name={t('Navbar.About')}></BasicButton>
                 </Link>
          </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Language color={'#151A30'} bgColor={'#ffffff'}/>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
          <Btp/>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LightNavbar;