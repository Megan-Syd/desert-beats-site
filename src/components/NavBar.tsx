'use client';
import { AppBar, Box, Button, Collapse, IconButton, Link, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu, RxCross1, RxChevronDown, RxChevronUp } from "react-icons/rx";

export interface NavbarProps{
    pages?: string[];
};

export default function NavBar({ 
    pages =['About', 'Classes', 'Gallery', 'Contact', 'FAQ']}: NavbarProps) {
        const router = useRouter();
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);

        const [menuOpen, setMenuOpen] = React.useState(false);
        const [classesOpen, setClassesOpen] = React.useState(false);
      
        const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleMenuClose = () => {
          setAnchorEl(null);
        };

        const handleNavigation = (page: string) => {
            const path = page.startsWith('/') ? page : `/${page.toLowerCase()}`;
            router.push(path);
            setMenuOpen(false);
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

                {!isMobile && (
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
              )}

              {isMobile && (
                <IconButton
                  color="inherit"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => setMenuOpen(true)}
                >
                  <RxHamburgerMenu />
                </IconButton>
              )}
            </Toolbar>
        </AppBar>

        {isMobile && menuOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "#5e0435",
            color: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={() => setMenuOpen(false)}
            sx={{ position: "absolute", top: 16, right: 16, color: "whitesmoke" }}
          >
            <RxCross1 />
          </IconButton>

          {pages.map((page) =>
            page === "Classes" ? (
              <Box key={page} sx={{ textAlign: "center", mb: 3 }}>
                <Button
                  onClick={() => setClassesOpen(!classesOpen)}
                  endIcon={classesOpen ? <RxChevronUp /> : <RxChevronDown />}
                  sx={{ fontSize: "2rem", color: "whitesmoke" }}
                >
                  {page}
                </Button>
                <Collapse in={classesOpen}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
                    <Button
                      sx={{ fontSize: "1.5rem", color: "whitesmoke" }}
                      onClick={() => handleNavigation("/classes/descriptions")}
                    >
                      Class Descriptions
                    </Button>
                    <Button
                      sx={{ fontSize: "1.5rem", color: "whitesmoke" }}
                      onClick={() => handleNavigation("/classes/registration")}
                    >
                      Registration
                    </Button>
                  </Box>
                </Collapse>
              </Box>
            ) : (
              <Button
                key={page}
                sx={{ fontSize: "2rem", mb: 2, color: "whitesmoke" }}
                onClick={() => handleNavigation(page)}
              >
                {page}
              </Button>
            )
          )}
        </Box>
      )}
    </Box>
    )
}