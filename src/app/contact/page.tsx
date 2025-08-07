import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Button, CardContent, CardHeader, Container, Grid, Paper, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Contact Us | Desert Beats',
}

export default function ContactPage() {
    return (
        <>
        <HeroImage title="Contact Us" backgroundImageUrl="/banner_images/banner05.jpeg" backgroundPosition="0 37%" />
        <Container maxWidth="lg" sx={{paddingBottom: 4}}>
            <Headline 
                title={"Questions? Write to us!"} 
                subtitle={"Send us a message by submitting the form below. We'll be happy to respond as soon as we can.\nBut first, check the FAQ page for any info you may have missed!"}>
            <Button href='/faq' variant="outlined" color="inherit" sx={{ margin: '10px'}}>
                FAQs
            </Button>
            </Headline>
            <Grid container spacing={2}>
                <Grid size={{ sm: 12, md: 6}}>
                    <Paper>
                        <ContactForm />
                    </Paper>
                </Grid>

                <Grid size={{sm: 12, md: 6 }}>
                    <Grid container direction="column" spacing={2}>
                        <Grid size={{md: 12}}>
                        <Paper>
                            <CardContent>
                            <Typography variant="h6" sx={{ padding: 3 }}>
                                Desert Beats is fortunate to share studio space with <strong>Saskatoon Salsa Dance Co</strong>.<br />
                                We use two studios within the space: the Big Studio and the Green Studio. <br />
                                Find our classes at 96 33rd Street East, Saskatoon SK
                            </Typography>
                            </CardContent>
                            </Paper>
                        </Grid>


                    <Grid size={{md: 12}}>
                        <Paper sx={{ }}>
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
            </Grid>
            </Grid>
        </Container>
        </>
    )
}