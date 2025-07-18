import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { MdExpandMore } from "react-icons/md";

export interface AppAccordionProps{
    summary: string;
    children: ReactNode;
}

export default function AppAccordion({summary, children}: AppAccordionProps) {
    return(
        <Accordion>
            <AccordionSummary
            expandIcon={<MdExpandMore />}>
                <Typography>{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {children}
            </AccordionDetails>            
        </Accordion>
    )
}