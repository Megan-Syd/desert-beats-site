import { Card, CardContent, CardHeader, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface CardContainerProps {
    title?: string;
    subtitle?: string;
    sx?:SxProps;
    children: ReactNode;
}

export default function CardContainer({
    children,
    sx = {},
    subtitle,
    title,
    ...other
}: CardContainerProps) {
    return (
        <Card
        sx={{ margin: '30px'}}>
        <CardHeader title={title} subheader={subtitle} />
        <CardContent
        sx={{}} >
            {children}
        </CardContent>
        </Card>
    )
}