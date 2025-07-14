import { Box, Divider, Icon, Stack, Typography } from "@mui/material";

export default function Footer() {
    return(
        <Box
        sx={{ backgroundColor: '#5e0435',
        color: 'whitesmoke',
        padding: '30px'}}>
            <Stack direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ justifyContent: 'space-evenly'}}
            >
                <Box>
                    <Typography>Hello There</Typography>
                    <Typography>How are you</Typography>
                </Box>
                <Box>                    
                    <Typography>Hello There</Typography>
                    <Typography>Hours Of Operation</Typography>
                    </Box>
                <Box>                    
                    <Typography>Hello There</Typography>
                    <Icon></Icon>
                </Box>
            </Stack>

        </Box>
    )
}