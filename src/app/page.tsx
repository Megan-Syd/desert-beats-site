import { Box, Button, Container, Grid, Typography } from "@mui/material";
import HeroImage from "@/components/HeroImage";
import Card from "@/components/Card";
import Headline from "@/components/Headline";

export default function Home() {
  return (
    <>
    <HeroImage title="Desert Beats" buttonText="Register For Classes" backgroundImageUrl="/banner_images/banner02.jpg" />
    <Container maxWidth='md'>
      <Card title={"Welcome to Desert Beats"}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 4,
      }}>
        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla autem iusto et animi! Vitae impedit voluptatibus, nulla atque perspiciatis minus quos assumenda quis nesciunt quibusdam voluptas modi laborum, quod fugiat!</Typography>
      </Card>
      <Card title={"What's New?"}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}>
        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, rerum? Nihil adipisci repudiandae tempora, saepe excepturi facere hic rem. Inventore necessitatibus voluptas reprehenderit iste dolores earum perferendis consectetur ducimus fugiat?</Typography>
      </Card>
      <Headline 
      sx={{color: 'whitesmoke', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      title={"Registrations are open!"} 
      subtitle={"Click the link below to sign up"}>
        <Button variant="outlined" color="inherit" sx={{ margin: '10px'}}>Register</Button>

      </Headline>
    </Container>
    </>
      );
}
