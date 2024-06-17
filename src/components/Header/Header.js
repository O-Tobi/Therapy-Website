
import * as React from 'react';
import { AppBar, Container, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

import CallToAction from '../Call-to-action/CallToAction';
import { NavLink, Outlet, Link } from 'react-router-dom';

const pages = ['Home', 'About', 'Services', 'Blog'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <CallToAction />
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* Hamburger menu for small screens */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
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
                                        <Typography textAlign="center">
                                            <NavLink to= {page === 'Home' ? '/' : `/${page.toLowerCase()}`}>
                                                {page}
                                            </NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Nav-links for large screens */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    component={NavLink}
                                    to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}/* {`${page.toLowerCase()}`} */
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Logo and company name */}
                        <PsychologyOutlinedIcon sx={{ fontSize: '3rem', display: 'flex', mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: 'uppercase',

                            }}
                        >
                            {/* ClearMind Therapy Center */}
                            ctc
                        </Typography>

                        {/* Button */}
                        <Box >
                            <Tooltip title='Send Enquiry'>
                                <Button
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        color: 'black',
                                        borderColor: 'black',
                                    }}
                                    variant="outlined" 
                                    endIcon={<ArrowRightAltIcon />}
                                    component={Link}
                                    to="/contact"
                                    >
                                    Send Enquiry
                                </Button>
                                <IconButton
                                    sx={{
                                        display: { xs: 'flex', md: 'none' }
                                    }}>
                                    <ArrowRightAltIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <Outlet />
        </Box>

    );
}
export default Header;