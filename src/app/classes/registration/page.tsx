import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Container, CardContent, List, ListItem, ListItemText, ListItemIcon, Typography, Grid, Link, Button } from "@mui/material";
import { Metadata } from "next";
import { FaCircle } from "react-icons/fa";

export const metadata : Metadata = {
    title: 'Class Registration | Desert Beats',
}

export default function RegistrationPage() {
    return(
        <>
            <HeroImage title="Register" backgroundImageUrl="/banner_images/banner08.jpg" backgroundPosition="0 20%" />

            <Container>
                <Headline title={"Registrations are open!"} subtitle={"Complete the Google form below to register"}>
                    <Button 
                    href='https://docs.google.com/forms/d/e/1FAIpQLScyhHEuL0e7HuBr1QApIdDAsMbItQbm7eu3pStj3SVCrpFweA/viewform?usp=share_link&ouid=100439058037915451782'
                    target="_blank"
                    rel="noopener noreferrer"
                     variant="outlined" 
                     color="inherit" 
                     sx={{ margin: '10px'}}>
                        Registration Form
                    </Button>
                </Headline>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6}}>
                        <Card>
                            <CardContent>
                                <Typography>
                                Registration and fees are due before the start of the first class. Fees can be paid by <strong>e-transfer</strong> to melaniesydiaha@gmail.com, by <strong>cash</strong>, or by <strong>cheque</strong> payable to Melanie Sydiaha.
                                </Typography>
                                <br />
                                <Typography>
                                Classes run for 10-week sessions, and specific dates will be posted on the website during each session. Beginner classes are each 1 hour long. Belly dance and fusion classes are 1 hour 15 minutes. FCBD® classes are 45 minutes. See{' '} 
                                    <Link 
                                    href="/classes/descriptions" 
                                    sx={{ color: "#5e0435", textDecorationColor: "#5e0435"}}>
                                        Class Descriptions
                                    </Link> 
                                {' '}for more details about each class.
                                </Typography>
                                <br />
                                <Typography sx={{ color: '#5e0435', fontWeight: 'bold'}}>
                                If you are uncertain about which class to register for, please{' '}
                                    <Link href="/contact" sx={{ color: "inherit", textDecorationColor: "inherit"}}>contact us</Link>
                                ! We would love to hear from you.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Fees:</Typography>
                                <List dense>
                                    {[
                                        {id: "beginner", text: "Beginner belly dance with Jodie is $150"},
                                        {id: "belly", text: "Belly dance with Melanie (intermediate to advanced) is $185"},
                                        {id: "fusion", text: "Fusion with Quinn is $185"},
                                        {id: "fcbd", text: "FCBD® with Quinn and Melanie is $120"},
                                        {id: "belly-fusion", text: "Belly dance + fusion is $300"},
                                        {id: "fcbd-bundle", text: "FCBD® bundle price (if taking any other class or classes) is $100"},
                                    ].map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <FaCircle style={{ fontSize: "10px", color: "#226C3B" }} />
                                            </ListItemIcon>
                                            <ListItemText>{item.text}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>


        </>
    )
}