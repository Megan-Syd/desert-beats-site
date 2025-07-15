import { Box, Divider, Icon, Link, Stack, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";

export default function Footer() {
    return(
        <Box
        sx={{ backgroundColor: '#5e0435',
        color: 'whitesmoke',
        padding: '30px'}}>
            <Stack direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ justifyContent: 'space-evenly'}}
            >
                <Box>
                    <Typography variant="h6">Desert Beats Belly Dance</Typography>
                    <Typography>96 A 33rd Street East</Typography>
                    <Typography>Saskatoon SK</Typography>
                    <Typography>S7K 0S1</Typography>
                </Box>
                <Box>                    
                    <Typography variant="h6">Hours Of Operation</Typography>
                    <Typography>Monday</Typography>
                    <Typography>Tuesday</Typography>
                    <Typography>Wednesday</Typography>
                    <Typography>Thursday</Typography>
                    <Typography>Friday</Typography>
                    <Typography>Saturday</Typography>
                    <Typography>Sunday</Typography>
                    </Box>
                <FooterLinks 
                title="Navigate"
                links={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                    { label: "Classes", href: "/classes" },
                    { label: "Gallery", href: "/gallery" },
                    { label: "FAQs", href: "/faq" },
                    { label: "Contact", href: "/contact" },
                ]}/>
            </Stack>

        </Box>
    )
}