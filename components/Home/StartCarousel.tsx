import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import StartCarouselSlide from "./StartCarouselSlide";

const colors = ["#0acb93", "#a953f8", "#ff5e42", "f5fe57", "#51c5ea"];

export default function StartCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      height={500}
      miw={"100%"}
      align="center"
      loop
      dragFree={false}
      draggable={false}
      withIndicators
      withControls={false}
      slideGap={0}
      slideSize={"100%"}
      plugins={[autoplay.current]}
      /* onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset} */
      speed={5}
      styles={(theme) => ({
        indicator: {
          width: 10,
          height: 10,
          borderRadius: 0,
          "&[data-active]": {
            backgroundColor: theme.colors["stunk-violet"][0],
          },
        },
      })}
    >
      {[...Array(5)].map((v, i) => (
        <StartCarouselSlide
          content={i}
          key={i}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ))}
    </Carousel>
  );
}
