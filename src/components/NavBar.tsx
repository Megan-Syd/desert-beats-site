'use client';
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export interface NavbarProps{
    pages?: string[];
};

export default function NavBar({ 
    pages =['About', 'Classes', 'Gallery', 'Contact', 'FAQ']}: NavbarProps) {
        const router = useRouter();
        const handleNavigation = (page: string) => {
            const path = `/${page.toLowerCase()}`;
            router.push(path);
          };
    return(
    <Box>
        <AppBar position="sticky" sx={{ backgroundColor: '#5e0435'}}>
            <Toolbar>
                <Typography variant="h5">
                    <Link 
                    href="/" 
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                        Desert Beats Belly Dance
                    </Link>
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                    {pages.map((page) => (
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