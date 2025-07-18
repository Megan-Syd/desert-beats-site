'use client';

import AppAccordion from "@/components/AppAccordion";
import Headline from "@/components/Headline";
import HeroImage from "@/components/HeroImage";
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
            <Container maxWidth='sm'> 
                <Box sx={{ padding: 4}}>
                    {[
                        {summary: 'Do I need to have prior dance experience?', children: 'lorem ipsum dolor sit amet' },
                        {summary: 'What kind of clothing and footwear should I bring to class?', children: '' },
                        {summary: 'When does the session begin?', children: '' },
                        {summary: 'How do I know which class to choose?', children: '' },
                        {summary: 'How do I sign up for classes?', children: '' },
                        {summary: 'How do I find the studio?', children: '' },
                        {summary: '7', children: '' },
                        {summary: '8', children: '' },
                    ].map((item, index) => (
                        <AppAccordion 
                            key={index} 
                            summary={item.summary} 
                            children={item.children}
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