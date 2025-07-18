import { Accordion, AccordionDetails, AccordionSummary, Box, SxProps, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { MdExpandMore } from "react-icons/md";

export interface AppAccordionProps{
    summary: string;
    children: ReactNode;
    sx?: SxProps;
    expanded?: boolean;
    onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export default function AppAccordion({summary, children, sx, expanded, onChange}: AppAccordionProps) {
    return(
        <Accordion 
            expanded={expanded} 
            onChange={onChange} 
            sx={{ 
                margin: 1, 
                borderRadius: 1, 
                // border: '5px solid transparent',
                // '&.Mui-expanded': {
                //     borderColor: '#226C3B'
                // }
            }}>
            <AccordionSummary
            expandIcon={<MdExpandMore size={28} />}>
                <Typography>{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {children}
            </AccordionDetails>            
        </Accordion>
    )
}