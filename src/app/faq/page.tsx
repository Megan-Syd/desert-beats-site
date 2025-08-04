'use client';

import AppAccordion from "@/components/AppAccordion";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
import { faqData } from "@/data/faqData";
import { Box, Button, Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";

// export const metadata : Metadata = {
//     title: 'FAQ | Desert Beats',
// }

export default function FAQPage() {
    const [expandedPanel, setExpandedPanel] = React.useState<number | false>(false);

    const handleAccordionChange = (panelIndex: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
    ) => {
    setExpandedPanel(isExpanded ? panelIndex : false);
    };


    return (
        <>
            <HeroImage title="Frequently Asked Questions" backgroundImageUrl="/banner_images/banner06.jpeg" />
            <Container maxWidth='md'> 
                <Box sx={{ padding: 4}}>
                    {faqData.map((item, index) => (
                        <AppAccordion 
                            key={index} 
                            summary={item.title} 
                            children={item.content}
                            // sx={}
                            expanded={expandedPanel === index}
                            onChange={handleAccordionChange(index)}
                        />
                    ))}
                </Box>
                
                <Headline title={"Still have questions?"} subtitle={" Get in touch!"}>
                    <Button href="/contact" variant='outlined' color="inherit" sx={{ margin: '10px'}}>
                        Contact Us
                    </Button>
                </Headline>
            </Container>
        </>
    )
}