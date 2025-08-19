import { Box, Button, CardContent, CardHeader, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import HeroImage from "@/components/HeroImage";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import Link from "next/link";
import newsData from "@/data/newsData";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Home | Desert Beats"
}

export default function Home() {
  return (
    <>
    <HeroImage /*title="Desert Beats"*/ backgroundImageUrl="/banner_images/banner02.jpg" />
    <Container maxWidth='md'>

      <Headline
        title={"Welcome to Desert Beats"} 
        subtitle={"movement - music - connection - cameraderie"}>
      </Headline>

      <Card
      // title={newsData.title}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}>
        <Typography variant="h4">{newsData.title}</Typography>
      {newsData.sections.map((section, index) => (
        <CardContent key={index}>
          {section.header && (
            <Typography variant="h5">
              {section.header}
            </Typography>
            )}
            {section.paragraphs.map((paragraph, i) => (
              <Typography key={i}>
                {paragraph}
              </Typography>
            ))}
            {/* <CardMedia 
            component='img'
            image="/placeholder-square.png"
            sx={{padding: '100px'}}
            /> */}
            <Divider 
              aria-hidden="true" 
              sx={{
                marginTop: 5, 
                borderColor: '#226C3B'
              }}
            />
        </CardContent>
      ))}
      </Card>

      <Headline 
      title={"Registration are open!"} 
      subtitle={"Click the link below for more information"}>
        <Button href='/classes/registration' variant="outlined" color="inherit" sx={{ margin: '10px'}}>
          Register
        </Button>
      </Headline>
    </Container>
    </>
      );
}
