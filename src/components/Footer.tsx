import { Box, Divider, Grid, Icon, Link, Stack, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";

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
                            {/* <Typography variant="h6">Desert Beats Belly Dance</Typography>
                            <Typography>96 A 33rd Street East</Typography>
                            <Typography>Saskatoon SK</Typography>
                            <Typography>S7K 0S1</Typography> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{ textAlign: 'left', maxWidth: '250px', width: '100%' }}>
                            {/* <Typography variant="h6">Hours Of Operation</Typography>
                            <Typography>Monday</Typography>
                            <Typography>Tuesday</Typography>
                            <Typography>Wednesday</Typography>
                            <Typography>Thursday</Typography>
                            <Typography>Friday</Typography>
                            <Typography>Saturday</Typography>
                            <Typography>Sunday</Typography> */}
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
                                { label: "Classes", href: "/classes" },
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