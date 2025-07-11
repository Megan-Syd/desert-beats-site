import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import { MdExpandMore } from "react-icons/md";

export default function FAQAccordion() {
    const ExpandMoreIcon = MdExpandMore as unknown as React.FC;
    return(
        <Box>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                    <Typography>FAQ 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>            
        </Accordion>
        </Box>
    )
}