import { Box, ImageList, ImageListItem } from "@mui/material";

export interface ImageItem {
    image: string;
    title: string;
  }
  
  export interface ImageMasonryProps {
    images: ImageItem[];
  }

export default function ImageMasonry({ images }: ImageMasonryProps) {
    return(
        <Box>
            <ImageList variant="masonry" cols={3} gap={20}>
                {images.map((item) => (
                    <ImageListItem key={item.image}>
                        <img
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{ borderRadius: 3, display: 'block', width: '100%', height: 'auto'}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

