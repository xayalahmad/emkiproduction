import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import BasicButton from '../BasicButton/BasicButton'
import MenuItem from '@mui/material/MenuItem';
export default function DrawerBar() {
    const { t, i18n } = useTranslation()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const pages = ['Products', 'Pricing', 'Blog'];
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

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className='flex flex-col bg-secondary h-full pt-16'
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <BasicButton name={t('Navbar.Home')}></BasicButton>
            <BasicButton name={t('Navbar.Events')}></BasicButton>
            <BasicButton name={t('Navbar.Blog')}></BasicButton>
            <BasicButton name={t('Navbar.Sponsors')}></BasicButton>
            <BasicButton name={t('Navbar.About')}></BasicButton>
            <BasicButton name={t('Navbar.Contact')}></BasicButton>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <>
                    <div className='p-0' onClick={toggleDrawer(anchor, true)}>    
                    <IconButton style={{padding: '0', marginRight: '20px'}} className='p-0'
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon style={{color: '#151A30'}}/>
                    </IconButton >
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </>
            ))}
        </div>
    );
}