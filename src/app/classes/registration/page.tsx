import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Container, CardContent } from "@mui/material";

export default function RegistrationPage() {
    return(
        <>
            <HeroImage title="Register" backgroundImageUrl="/banner_images/banner08.jpg" backgroundPosition="0 20%" />

            <Container>
                <Headline title={"Registration is open from July to September"} subtitle={"Read below to see how it works"} />

                <Card>
                    <CardContent></CardContent>
                </Card>
            </Container>


        </>
    )
}