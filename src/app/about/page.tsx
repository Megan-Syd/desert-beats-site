import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Box, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { Metadata } from "next";
import aboutData from "@/data/aboutData";

export const metadata : Metadata = {
    title: 'About Us | Desert Beats',
}

export default function AboutPage() {
    return (
        <>
            <HeroImage title="About Us" backgroundImageUrl="/banner_images/banner03.JPG"/>
            <Container>
                <Headline title={aboutData.title} />

                {aboutData.sections.map((section, index) => (
                    <Card key={index} /*title={section.header}*/ >
                        <CardContent>
                            <Typography variant="h3">{section.header}<br /><br /></Typography>
                            {section.paragraphs.map((paragraph, i) => (
                                <Typography key={i} >
                                    {paragraph}
                                </Typography>
                            ))}
                        </CardContent>
                    </Card>
                ))}

<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '30px'}}>
                    {[
                        { id: 'teacher-mel', title: "Melanie", image: "/teacher_images/teacher-mel.jpg" },
                        { id: 'teacher-quinn', title: "Quinn", image: "/teacher_images/teacher-quinn.jpg" },
                        { id: 'teacher-jodie', title: "Jodie", image: "/teacher_images/teacher-jodie.jpg" },
                    ].map((item, index) => (
                            <Box
                            key={index}
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
                                    width: "300px",
                                    height: "300px",
                                    objectFit: "cover",
                                    display: 'block',
                                    transform: 'scale(1.7)',
                                    transformOrigin: 'center top',
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
                                textAlign: 'center',
                                }}>
                                    <Typography variant="h5">{item.title.toUpperCase()}</Typography>
                                    {/* <Typography variant="body1">{item.subtitle}</Typography> */}
                                </Box>
                            </Box>
                    ))}
                </Box>


            </Container>
        
        </>
    )
}