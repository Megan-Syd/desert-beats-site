import { Box, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface HeadlineProps{
    title: string;
    subtitle: string;
    children?: ReactNode;
    sx?: SxProps<Theme>;
}

export default function Headline({title, subtitle, children, sx}: HeadlineProps) {
    return(
        <Box sx={sx}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{subtitle}</Typography>
            {children}
        </Box>
    );
}