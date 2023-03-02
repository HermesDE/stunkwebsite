import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";

type Props = { content: any; color: string };

export default function StartCarouselSlide({ content, color }: Props) {
  return (
    <Carousel.Slide>
      <Box
        sx={(theme) => ({
          backgroundColor: color,
          width: "100%",
          height: 500,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          cursor: "pointer",
        })}
      >
        {content}
      </Box>
    </Carousel.Slide>
  );
}
