'use client';
import { AppBar, Box, Button, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export interface NavbarProps{
    pages?: string[];
};

export default function NavBar({ 
    pages =['About', 'Classes', 'Gallery', 'Contact', 'FAQ']}: NavbarProps) {
        const router = useRouter();

        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
      
        const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleMenuClose = () => {
          setAnchorEl(null);
        };

        const handleNavigation = (page: string) => {
            const path = page.startsWith('/') ? page : `/${page.toLowerCase()}`;
            router.push(path);
           handleMenuClose(); 
          };
    return(
    <Box>
        <AppBar position="sticky" sx={{ backgroundColor: '#5e0435', width: '100%'}}>
            <Toolbar>
                <Typography variant="h5">
                    <Link 
                    href="/" 
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                        Desert Beats Belly Dance
                    </Link>
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                    {pages.map((page) =>
                    page === 'Classes' ? (
                        <React.Fragment key={page}>
                          <Button
                            sx={{ color: 'whitesmoke', padding: '6px 16px', midWidth: 'auto' }}
                            onClick={handleMenuClick}
                            aria-controls={open ? 'classes-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                          >
                            {page}
                          </Button>
                          <Menu
                            disablePortal
                            disableScrollLock
                            id="classes-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            PaperProps={{
                              sx: {
                                backgroundColor: '#7a1f55',
                                color: 'whitesmoke',
                                mt: 1,
                                minWidth: 180,
                              },
                            }}
                            slotProps={{
                              list: {
                                'aria-labelledby': 'classes-button'
                              }
                            }}
                          >
                            <MenuItem onClick={() => handleNavigation('/classes/descriptions')}>
                              Class Descriptions
                            </MenuItem>
                            <MenuItem onClick={() => handleNavigation('/classes/registration')}>
                              Registration
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      ) : (
                    <Button key={page}
                    sx={{ color: 'whitesmoke'}}
                    onClick={() => handleNavigation(page)} 
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
    )
}