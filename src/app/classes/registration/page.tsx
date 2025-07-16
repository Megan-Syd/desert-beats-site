import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Container, Card, CardContent } from "@mui/material";

export default function RegistrationPage() {
    return(
        <>
            <HeroImage title="Register" backgroundImageUrl="#" />

            <Container>
                <Headline title={"Registration is open from July to September"} subtitle={"Read below to see how it works"} />

                <Card>
                    <CardContent></CardContent>
                </Card>
            </Container>


        </>
    )
}