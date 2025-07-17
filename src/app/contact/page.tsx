import Card from "@/components/Card";
import HeroImage from "@/components/HeroImage";
import { CardHeader, Grid, Paper, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Contact Us | Desert Beats',
}

export default function ContactPage() {
    return (
        <>
        <HeroImage title="Contact Us" backgroundImageUrl="/banner_images/banner05.jpeg" />
        <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 4}}>
                <Card title={"Get In Touch"}>
                    <Typography>96 33rd Avenue East<br />Saskatoon SK S7K 0S1</Typography>
                    <Typography>melaniesydiaha@gmail.com</Typography>
                    <Typography>(306)123-4567</Typography>
                </Card>
            </Grid>
            <Grid size={{xs: 6, md: 8 }}>
                <Paper sx={{ margin: '10px 10px 10px 0'}}>
                <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.4578348319264!2d-106.66356392362759!3d52.144183071965074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6e85e7e53f5%3A0xff23fa7b36940d06!2s96%20A%2033%20St%20E%2C%20Saskatoon%2C%20SK%20S7K%200S1!5e0!3m2!1sen!2sca!4v1752508594989!5m2!1sen!2sca"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '5px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}