import React, { useEffect, useState, useRef } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const ScrollToTop = () => {
  const { colorMode } = useColorMode();

  const scrollButton = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;

    if (position > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    scrollButton.current.blur();
  };
  return (
    <>
      {isVisible ? (
        <IconButton
          aria-label="scroll to top"
          icon={<BsFillArrowUpCircleFill />}
          size="md"
          colorScheme={"brand.colorScheme"}
          color={colorMode === "dark" ? "theme.300" : "theme.300"}
          border="2px"
          ref={scrollButton}
          position="fixed"
          zIndex={"999"}
          right="4rem"
          bottom="4rem"
          variant={"outline"}
          onClick={handleClick}
          rounded="3xl"
          _hover={{
            cursor: "pointer",
          }}
        />
      ) : null}
    </>
  );
};
