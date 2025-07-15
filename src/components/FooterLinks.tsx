import { Box, Link, Typography } from "@mui/material";

interface FooterLinksProps{
    title: string;
    links: {label: string; href: string}[];
}

export default function FooterLinks({title, links}: FooterLinksProps) {
    return(
        <Box>
            <Typography variant="h6">{title}</Typography>
            {links.map(({label, href}) => (
                <Typography key={label}>
                    <Link href={href} color="inherit" underline="hover">{label}</Link>
                </Typography>
            ))}
        </Box>
    );
}