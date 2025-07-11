import { Box, Typography, Button } from "@mui/material";

export default function HeroImage() {
    return (
        <Box
        sx={{
            height: '100vh',
            backgroundImage: `url('/path/to/your/image.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
          }}
          >
            <Box sx={{ zIndex: 2, maxWidth: 800, px: 3 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h5" paragraph>
          Discover amazing content, services, or products that we offer.
        </Typography>
        <Button variant="contained" size="large" color="primary">
          Get Started
        </Button>
      </Box>

        </Box>
    )
}