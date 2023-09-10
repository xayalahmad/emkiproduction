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
import Logo from '../../Image/emkiLogo.svg'
import BasicButton from '../Button/BasicButton/BasicButton'
import { useTranslation } from 'react-i18next';
import DarkButton from '../Button/DarkButton/Button';
import Ticket from '../../Image/ticket.svg'
import Language from '../../Language/Language';
import styles from './Navbar.module.css'
import Drawer from './Drawer';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
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
    <AppBar elevation={0} style={{backgroundColor: '#1C213C', border: '1px solid #1C213C'}} className='sm:px-12 px-6' position="static">
      <Container style={{backgroundColor: '#151A30', borderRadius: '0 0 24px 24px', padding: '24px 32px'}}  className='mx-2 bg-main' maxWidth="xl">
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
          <img src={Logo} />
          <Box
           className={styles.items} 
           sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <BasicButton name={t('Navbar.Home')}></BasicButton>
            <BasicButton name={t('Navbar.Events')}></BasicButton>
            <BasicButton name={t('Navbar.Blog')}></BasicButton>
            <BasicButton name={t('Navbar.Sponsors')}></BasicButton>
            <BasicButton name={t('Navbar.About')}></BasicButton>
            <BasicButton name={t('Navbar.Contact')}></BasicButton>
          </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Language/>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
              <Box className='flex items-center'>
                <DarkButton variant='contained' name={t('Button.buyTicket')}></DarkButton>
                <Box style={{ padding: '14px 8px', minWidth: '36px', maxHeight: '48px' }} className="rounded-lg bg-white" >
                  <img src={Ticket} />
                </Box>
              </Box>
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
export default Navbar;