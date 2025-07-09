import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from "@mui/material";

const pages =['About', 'Classes', 'Gallery', 'Contact', 'FAQs'];

export default function NavBar() {
    <Box>
        <AppBar position="static">
            <Toolbar>
            <Menu
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    sx={{ display: { xs: 'block', md: 'none' } }} open={false}            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Toolbar>
        </AppBar>
    </Box>
}