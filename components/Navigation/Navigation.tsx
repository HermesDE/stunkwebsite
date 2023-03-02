import { Box, TextInput } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import { useMemo, useState } from "react";
import SearchGlassIcon from "../Icons/SearchGlassIcon";

export default function Navigation() {
  const [scroll, scrollTo] = useWindowScroll();
  const [focused, setFocused] = useState(false);

  const isActive = useMemo(() => {
    console.log(!(scroll.y > 0) || focused);
    return scroll.y > 0 || focused;
  }, [scroll.y, focused]);

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };

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
        backgroundColor: !isActive
          ? "transparent"
          : theme.colors["stunk-violet"][0],
        boxShadow: isActive ? "black 0px 5px 10px -5px" : "",
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
        <TextInput
          placeholder="Finde Videos & Kanäle"
          variant={"unstyled"}
          onFocus={onFocus}
          onBlur={onBlur}
          icon={<SearchGlassIcon size={20} color={undefined} />}
          styles={{
            wrapper: {
              background: isActive ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)",
            },
            input: {
              color: "white",
              fontWeight: 500,
            },
          }}
        />
      </div>
    </Box>
  );
}
