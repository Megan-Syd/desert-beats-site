import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";

export interface NavbarProps{
    pages?: string[];
};

export default function NavBar({ 
    pages =['About', 'Classes', 'Gallery', 'Contact', 'FAQ']}: NavbarProps) {
    return(
    <Box>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {pages.map((page) => (
                    <Button key={page}
                    sx={{ color: 'white'}}
                    onClick={() => console.log(`${page} clicked`)} 
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