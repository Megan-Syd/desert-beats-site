import AppAccordion from "@/components/AppAccordion";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import { classesData } from "@/data/classesData";

export const metadata : Metadata = {
    title: 'Class Descriptions | Desert Beats',
}

export default function ClassesPage() {
    return (
        <>
            <HeroImage title="Classes" backgroundImageUrl="/banner_images/banner01.JPG"/>

            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '30px'}}>
                    {[
                        { id: 'beginner', title: "Beginner", subtitle: "with Jodie", image: "/thumbnail_images/thumbnail-beginner.JPG" },
                        { id: 'oriental', title: "Oriental", subtitle: "with Melanie", image: "/thumbnail_images/thumbnail-oriental.jpeg" },
                        { id: 'fusion', title: "Fusion", subtitle: "with Quinn", image: "/thumbnail_images/thumbnail-fusion.jpeg" },
                        { id: 'fcbd', title: "FCBD® Style", subtitle: "with Quinn and Melanie", image: "/thumbnail_images/thumbnail-fcbd.jpg" },
                    ].map((item, index) => (
                        <a key={index} href={`#${item.id}`} style={{textDecoration: 'none'}}>
                            <Box
                            // key={index}
                            sx={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: '5px',
                            border: '1px solid black'
                            }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                    width: "200px",
                                    height: "200px",
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
                        </a>
                    ))}
                </Box>

                <Box>
                    {classesData.map((item, index) => (
                        <Box id={item.id} key={index}>
                            <Card>
                                <Typography variant="h3">{item.title}</Typography>
                                <Typography variant="h6" sx={{color: '#5e0435'}}>
                                    {item.subtitle.toUpperCase()}
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 7}}>
                                <CardContent>
                                    <br/>
                                    <Typography>{item.level}</Typography>
                                    <br />

                                    {item.description.split('\n\n').map((paragraph, idx) => (
                                        <Typography key={idx}>
                                        {paragraph}
                                        </Typography>
                                    ))}

                                    {/* <Typography>{item.description}</Typography> */}
                                    <br />
                                    <Typography
                                        sx={{
                                            color: '#5e0435',
                                            // textDecoration: 'underline',
                                            // textDecorationColor: '#2b2d2f',
                                            // textUnderlineOffset: '5px'
                                        }}
                                    >{item.timePlace}</Typography>
                                </CardContent>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 5}}>
                                <CardMedia 
                                component='img'
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    maxWidth: 400,
                                    borderRadius: '5px',
                                    border: '1px solid black'
                                }}
                                />
                                </Grid>
                                </Grid>
                            </Card>
                        </Box>
                    ))}
                </Box>

{/* 'registrations open' headline */}
                <Headline 
                title={"Registrations are open!"} 
                subtitle={"Click the link below to sign up"}>
                    <Link href='/classes/registration' passHref>
                        <Button variant="outlined" color="inherit" sx={{ margin: '10px'}}>
                            Register
                        </Button>
                    </Link>
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
