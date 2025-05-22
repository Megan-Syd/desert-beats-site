import { createTheme, ThemeOptions } from '@mui/material';
import { Noto_Sans_Display } from 'next/font/google';

const notoSansDisplay = Noto_Sans_Display({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
});

const theme = createTheme({
    typography: {
        fontFamily: notoSansDisplay.style.fontFamily,
    },
})