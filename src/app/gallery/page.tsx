import HeroImage from "@/components/HeroImage";
import ImageMasonry from "@/components/ImageMasonry";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import { imageData } from '@/data/galleryData';

export const metadata : Metadata = {
    title: 'Gallery | Desert Beats',
}

export default function GalleryPage() {
    return (
        <>
        <HeroImage title="Gallery" backgroundImageUrl="/banner_images/banner07.jpg" backgroundPosition="0 55%" />

        <Container>
            <Box sx={{ margin: '30px' }}>
            <ImageMasonry images={imageData} />
            </Box>
        </Container>
        
        </>
    )
}