import { Box } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import { useMemo } from "react";

export default function Navigation() {
  const [scroll, scrollTo] = useWindowScroll();

  const isOnTop = useMemo(() => {
    return !(scroll.y > 0);
  }, [scroll.y]);

  return (
    <Box
      sx={(theme) => ({
        height: "5rem",
        width: "100%",
        zIndex: 100,
        position: "fixed",
        display: "flex",
        alignItems: "center",
        transitionDuration: "0.5s",
        transitionDelay: "0s",
        transitionProperty: "background-color",
        transitionTimingFunction: "ease-out",
        backgroundColor: isOnTop
          ? "transparent"
          : theme.colors["stunk-violet"][0],
        boxShadow: !isOnTop ? "black 0px 5px 10px -5px" : "",
      })}
    >
      <div
        style={{
          height: "4rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image
          src={"/images/stunk-full.svg"}
          height={80}
          width={200}
          alt="stunk logo"
        />
      </div>
    </Box>
  );
}
