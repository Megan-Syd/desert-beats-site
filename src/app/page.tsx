import { Box, Button, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import HeroImage from "@/components/HeroImage";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <HeroImage /*title="Desert Beats"*/ backgroundImageUrl="/banner_images/banner02.jpg" />
    <Container maxWidth='md'>

      <Headline
        title={"Welcome to Desert Beats"} 
        subtitle={"movement - music - connection - cameraderie"}>
      </Headline>

      {/* <Card title={"Welcome to Desert Beats"}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 4,
      }}>
        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla autem iusto et animi! Vitae impedit voluptatibus, nulla atque perspiciatis minus quos assumenda quis nesciunt quibusdam voluptas modi laborum, quod fugiat!</Typography>
      </Card> */}
      <Card
      title="What's New at Desert Beats"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}>
          {/* <CardHeader title=""/> */}
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, rerum? Nihil adipisci repudiandae tempora, saepe excepturi facere hic rem. Inventore necessitatibus voluptas reprehenderit iste dolores earum perferendis consectetur ducimus fugiat?
            </Typography>
            <CardMedia 
            component='img'
            image="/placeholder-square.png"
            sx={{padding: '100px'}}
            />
        </CardContent>
      </Card>
      <Headline 
      title={"Registrations are open!"} 
      subtitle={"Click the link below to sign up"}>
        <Button href='/classes/registration' variant="outlined" color="inherit" sx={{ margin: '10px'}}>
          Register
        </Button>
      </Headline>
    </Container>
    </>
      );
}
