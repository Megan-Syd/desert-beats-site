'use client';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export interface NavbarProps{
    pages?: string[];
};

export default function NavBar({ 
    pages =['About', 'Classes', 'Gallery', 'Contact', 'FAQs']}: NavbarProps) {
    return(
    <Box>
        <AppBar position="sticky" sx={{ backgroundColor: '#5e0435'}}>
            <Toolbar>
              <Typography variant="h5">Desert Beats Belly Dance</Typography>
                <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                    {pages.map((page) => (
                    <Button key={page}
                    sx={{ color: 'whitesmoke'}}
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