import { Box, Typography, Button } from "@mui/material";
import { ReactNode } from "react";

export interface HeroImageProps{
  title?: string;
  backgroundImageUrl?: string;
  children?: ReactNode;
}

export default function HeroImage({title, backgroundImageUrl, children}: HeroImageProps) {
    return (
        <Box
        sx={{
            height: '50vh',
            backgroundImage: `url(${backgroundImageUrl || '###'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'whitesmoke',
            textAlign: 'center',
            position: 'relative',
          }}
          >
            <Box sx={{ zIndex: 2, maxWidth: 800, px: 3 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          {children}
        </Typography>
        {/* <Button variant="contained" size="large" color="primary">
          Get Started
        </Button> */}
      </Box>

        </Box>
    )
}