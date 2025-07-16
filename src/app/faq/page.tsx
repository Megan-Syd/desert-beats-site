import AppAccordion from "@/UI/AppAccordion";
import HeroImage from "@/components/HeroImage";
import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'FAQ | Desert Beats',
}

export default function FAQPage() {
    return (
        <>
            <HeroImage title="Frequently Asked Questions" backgroundImageUrl="/banner_images/banner06.jpeg" />
            <Container 
            maxWidth='sm'
            sx={{
                padding: 4
            }}
            >
                <AppAccordion summary={""} children={undefined}></AppAccordion>
            </Container>
        </>
    )
}