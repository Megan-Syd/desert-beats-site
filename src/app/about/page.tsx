import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { CardContent, Container } from "@mui/material";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'About Us | Desert Beats',
}

export default function AboutPage() {
    return (
        <>
            <HeroImage title="About Us" backgroundImageUrl="/banner_images/banner03.JPG"/>
            <Container>
                <Headline title={"Something something belly dance"} subtitle={"something else about dancey dance"} />

                <Card title="Our Story">
                    <CardContent></CardContent>
                </Card>

                <Card title="Our Purpose">
                    <CardContent></CardContent>
                </Card>

                <Card title="Meet the Team">
                    <CardContent></CardContent>
                </Card>


            </Container>
        
        </>
    )
}