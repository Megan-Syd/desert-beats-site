import { Box, Grid, Link, Typography } from "@mui/material";
import { FaFacebook, FaYoutube } from "react-icons/fa";

interface FooterLinksProps{
    title: string;
    links: {label: string; href: string}[];
}

export default function FooterLinks({title, links}: FooterLinksProps) {
    return(
        <Grid container spacing={2}>
            <Grid size={{md: 9}}>
                <Box>
                    <Typography variant="h6">{title}</Typography>
                    {links.map(({label, href}) => (
                        <Typography key={label}>
                            <Link href={href} color="inherit" underline="hover">{label}</Link>
                        </Typography>
                    ))}
                </Box>
            </Grid>
            <Grid size={{md: 3}}>
                <Box>
                    <Typography variant="h5">
                        <Link 
                        href='' 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ color: 'whitesmoke'}}>
                            <FaYoutube />
                        </Link>
                    </Typography>
                    <Typography variant="h5">
                        <Link 
                        href='https://www.facebook.com/DesertBeatsBellyDance' 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ color: 'whitesmoke'}}>
                            <FaFacebook />
                        </Link>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}