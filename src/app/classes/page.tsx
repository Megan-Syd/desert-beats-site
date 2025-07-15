import AppAccordion from "@/UI/AppAccordion";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import { MdExpandMore } from "react-icons/md";

export const metadata : Metadata = {
    title: 'Classes | Desert Beats',
}

export default function ClassesPage() {
    return (
        <>
        <Container>
            <HeroImage title="Classes" backgroundImageUrl="#"/>

            <Box>
                <AppAccordion summary={"Beginner with Jodie"}>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis error corporis nulla reprehenderit nemo, veritatis illo saepe perferendis laudantium eius aliquid, ratione soluta facere, natus corrupti sapiente suscipit consequatur!
                    </Typography>
                </AppAccordion>
                <AppAccordion summary={"Oriental with Melanie"} children={undefined}></AppAccordion>
                <AppAccordion summary={"Fusion with Quinn"} children={undefined}></AppAccordion>
                <AppAccordion summary={"FCBD style with Quinn & Melanie"} children={undefined}></AppAccordion>
            </Box>

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