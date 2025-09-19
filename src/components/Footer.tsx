import { Box, Divider, Grid, Icon, Link, Stack, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";
import Image from "next/image";

export default function Footer() {
    return(
        <Box
        sx={{ backgroundColor: '#5e0435',
        color: 'whitesmoke',
        padding: '30px',
        width: '100%'}}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{ textAlign: 'left', maxWidth: '250px', width: '100%' }}>
                            <Image src={"/dbbd-letters.svg"} alt={"Desert Beats Belly Dance letters logo"} height={200} width={200} />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{ textAlign: 'left', maxWidth: '250px', width: '100%' }}>
                            
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{ textAlign: 'left', maxWidth: '250px', width: '100%' }}>
                            <FooterLinks  
                            title="Navigate"
                            links={[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Classes", href: "/classes/descriptions" },
                                { label: "Register", href: "/classes/registration"},
                                { label: "Gallery", href: "/gallery" },
                                { label: "FAQ", href: "/faq" },
                                { label: "Contact", href: "/contact" },
                            ]}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}