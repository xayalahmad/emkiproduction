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
import Language from '../../../Language/LanguageDark';
import styles from './Navbar.module.css'
import Drawer from './Drawer';
import { Link } from "react-router-dom";
import Wtp from '../../myButton/Wtp/Wtp';

function DarkNavbar() {

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


  return (
    <AppBar position='fixed' elevation={0} style={{ backgroundColor: '#1C213C', border: '0px' }} className='sm:px-12 px-6' >
      <Container fixed={true} style={{ backgroundColor: '#151A30', borderRadius: '0 0 24px 24px', padding: '24px 32px', boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }} className='mx-2 bg-main' maxWidth="xl">
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
            <Drawer />
          </Box>
          <Box className='flex items-center justify-between w-full'>
          <Link to="/">{" "}
            <img src={Logo} />
          </Link>
            <Box
              className={styles.items}
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                 <Link to="/">{" "}
              <BasicButton mode={true} name={t('Navbar.Home')}></BasicButton>
                 </Link>

                 <Link to="/events">{" "}
                 <BasicButton mode={true} name={t('Navbar.Events')}></BasicButton>
                 </Link>

                 <Link to="/">{" "}
              <BasicButton mode={true} name={t('Navbar.Sponsors')}></BasicButton>
                 </Link>

                 <Link to="/events">{" "}
              <BasicButton mode={true} name={t('Navbar.About')}></BasicButton>
                 </Link>

                 <Link to="/">{" "}
              <BasicButton mode={true} name={t('Navbar.Contact')}></BasicButton>
                 </Link>





            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Language color={'white'} bgColor={'#151A30'} />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
         <Wtp/>
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
export default DarkNavbar;