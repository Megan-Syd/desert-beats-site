import AppAccordion from "@/UI/AppAccordion";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import { MdExpandMore } from "react-icons/md";

export const metadata : Metadata = {
    title: 'Classes | Desert Beats',
}

export default function ClassesPage() {
    return (
        <>
            <HeroImage title="Classes" backgroundImageUrl="/banner_images/banner03.JPG"/>

            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {[
                        { title: "Beginner", subtitle: "with Jodie", image: "/placeholder-square.png" },
                        { title: "Oriental", subtitle: "with Melanie", image: "/placeholder-square.png" },
                        { title: "Fusion", subtitle: "with Quinn", image: "/placeholder-square.png" },
                        { title: "FCBD Style", subtitle: "with Quinn and Melanie", image: "/placeholder-square.png" },
                    ].map((item, index) => (
                        <Card key={index}>
                            <Box
                            sx={{
                            position: "relative",
                            overflow: "hidden",
                            }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: 'block'
                                    }}
                                />
                                <Box
                                sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                color: 'white',
                                padding: '5px',
                                textAlign: 'center'
                                }}>
                                    <Typography variant="h5">{item.title.toUpperCase()}</Typography>
                                    <Typography variant="body1">{item.subtitle}</Typography>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Box>

                <Box>
                    {[
                        { title: 'Beginner', subheader: 'with Jodie', text: ''},
                        { title: 'Oriental', subheader: 'with Melanie', text: ''},
                        { title: 'Fusion', subheader: 'with Quinn', text: ''},
                        { title: 'FCBD Style', subheader: 'with Quinn and Melanie', text: ''},
                    ].map((item, index) => (
                        <Card key={index}>
                            <CardHeader
                            title={item.title}
                            subheader={item.subheader}
                            />
                            <CardContent>
                                <Typography>{item.text}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

{/* 'registrations open' headline */}
                <Headline 
                sx={{color: 'whitesmoke', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                title={"Registrations are open!"} 
                subtitle={"Click the link below to sign up"}>
                    <Button variant="outlined" color="inherit" sx={{ margin: '10px'}}>
                        Register
                    </Button>
                </Headline>
            </Container>
        </>
    )
}

            {/* Alternative Accordion info display */}
            {/* <Box>
                <AppAccordion summary={"Beginner with Jodie"}>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis error corporis nulla reprehenderit nemo, veritatis illo saepe perferendis laudantium eius aliquid, ratione soluta facere, natus corrupti sapiente suscipit consequatur!
                    </Typography>
                </AppAccordion>
                <AppAccordion summary={"Oriental with Melanie"} children={undefined}></AppAccordion>
                <AppAccordion summary={"Fusion with Quinn"} children={undefined}></AppAccordion>
                <AppAccordion summary={"FCBD style with Quinn & Melanie"} children={undefined}></AppAccordion>
            </Box> */}

            {/* Alternative 2-column info display */}
            {/* <Grid 
            container 
            direction="column" 
            spacing={2} 
            sx={{ maxWidth: '70%', margin: '0 auto'}}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid size={{xs: 12, md: 6}}>
                        <Card title="Class 1">
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab numquam earum atque! Iusto quae, dignissimos beatae excepturi placeat consequatur at animi qui, quas, eum illo nostrum maxime nulla blanditiis!<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam, culpa provident perferendis iusto ducimus eius, quis repellendus amet facere saepe optio eum iste voluptatem. Dolor eligendi architecto unde placeat?</Typography>
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Card>
                            <CardMedia 
                            component="img"
                            height="400"
                            image="#"
                            alt="Class Image Placeholder"/>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="stretch">
                    <Grid size={{xs: 12, md: 6}}>
                        <Card>
                            <CardMedia 
                            component="img"
                            height="400"
                            image="#"
                            alt="Class Image Placeholder"/>
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Card title="Class 2">
                            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odio excepturi laboriosam. Exercitationem doloremque eveniet facilis autem itaque ad earum? Exercitationem, soluta doloribus atque doloremque magni quod deserunt animi repellendus?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta quasi quis odio dicta id! Aut natus impedit quibusdam labore autem facere sint blanditiis ut a modi. Doloribus, non voluptatum.</Typography>
                        </Card>
                    </Grid>
                </Grid>
        </Grid> */}
