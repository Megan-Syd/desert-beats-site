import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { CardContent, Container, Typography } from "@mui/material";
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
                <Headline title={aboutData.title} subtitle={aboutData.subtitle} />

                {aboutData.sections.map((section, index) => (
                    <Card key={index} title={section.header}>
                        <CardContent>
                            {section.paragraphs.map((paragraph, i) => (
                                <Typography key={i} >
                                    {paragraph}
                                </Typography>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </Container>
        
        </>
    )
}