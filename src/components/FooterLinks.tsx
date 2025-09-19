import { Box, Grid, Link, Typography } from "@mui/material";
import { FaFacebook, FaYoutube } from "react-icons/fa";

interface FooterLinksProps{
    title: string;
    links: {label: string; href: string}[];
}

export default function FooterLinks({title, links}: FooterLinksProps) {
    return(
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        gap: 2
                    }}
                >
                    <Box sx={{ flex: '1 1 200px', minWidth: '150px'}}>
                        <Typography variant="h6">{title}</Typography>
                        {links.map(({label, href}) => (
                            <Typography key={label}>
                                <Link href={href} color="inherit" underline="hover">{label}</Link>
                            </Typography>
                        ))}
                    </Box>
                    <Box sx={{ flex: '0 0 auto', mt: { xs: 2, md: 0 } }}>
                        {/* <Typography variant="h5">
                            <Link 
                            href='' 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            sx={{ color: 'whitesmoke'}}>
                                <FaYoutube />
                            </Link>
                        </Typography> */}
                        <Typography variant="h4">
                            <Link 
                            href='https://www.facebook.com/DesertBeatsBellyDance' 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            sx={{ color: 'whitesmoke'}}>
                                <FaFacebook />
                            </Link>
                        </Typography>
                    </Box>
                </Box>
    );
}