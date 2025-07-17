'use client';

import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setShowButton(window.scrollY > 300); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box
        sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 999,
            display: showButton ? 'block' : 'none',
        }} 
        >
            <Button
            sx={{ 
                width: 45,
                height: 45,
                minWidth: 0,
                borderRadius: 50,
                color: 'whitesmoke',
                backgroundColor: 'gray',
                fontSize: 25,
                '&:hover': {
                    backgroundColor: '#226C3B'
                }
            }} 
            onClick={scrollToTop}><FaChevronUp /></Button>
        </Box>
    )
}
// #DECCD6