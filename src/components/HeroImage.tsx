import { Box, Typography, Button } from "@mui/material";
import { ReactNode } from "react";

export interface HeroImageProps{
  title?: string;
  backgroundImageUrl?: string;
  children?: ReactNode;
  buttonText?: string;
  buttonOnClick?: () => void;
  backgroundPosition?: string;
}

export default function HeroImage({title, backgroundImageUrl, children, buttonText, buttonOnClick, backgroundPosition}: HeroImageProps) {
    return (
        <Box
        sx={{
            height: '50vh',
            backgroundImage: `url(${backgroundImageUrl || '###'})`,
            backgroundSize: 'cover',
            backgroundPosition: backgroundPosition || 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'whitesmoke',
            textAlign: 'center',
            position: 'relative',
          }}
          >
            <Box sx={{ zIndex: 2, maxWidth: 800, px: 3 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ textShadow: '1px 1px 0 #2b2d2f, -1px 1px 0 #2b2d2f, -1px -1px 0 #2b2d2f, 1px -1px 0 #2b2d2f' }}>
          {title}
        </Typography>
        <Typography variant="h5">
          {children}
        </Typography>
        {buttonText && (
          <Button 
          variant="contained" 
          size="large" 
          color="inherit" 
          onClick={buttonOnClick} 
          sx={{ color: '#2b2d2f'}}>
            {buttonText}
          </Button>
        )}
      </Box>

        </Box>
    )
}