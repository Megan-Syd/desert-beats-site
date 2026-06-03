import { Box, Button, CardContent, CardHeader, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import HeroImage from "@/components/HeroImage";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import Link from "@mui/material/Link";
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
        title={"Welcome to Desert Beats Belly Dance"} 
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
        <Typography variant="h3" sx={{ color: "#5e0435"}}>{newsData.title}</Typography>
      {newsData.sections.map((section, index) => (
        <CardContent key={index}>
          {section.header && (
            <Typography variant="h5">
              {section.header}
            </Typography>
            )}
            {section.paragraphs.map((paragraph, i) => (
              <Typography key={i}>
                {paragraph.text}
                {paragraph.link && (
                <Link href={paragraph.link.url} target="_blank" rel="noreferrer" sx={{ color: "#226C3B", textDecoration: "none"}}>
                  {paragraph.link.text}
                  </Link> )}
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
      title={"Registrations are open!"} 
      subtitle={"Click the link below to learn about our classes"}>
        <Button href='/classes/descriptions' variant="outlined" color="inherit" sx={{ margin: '10px'}}>
          Classes
        </Button>
      </Headline>
    </Container>
    </>
      );
}
