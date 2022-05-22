import React, { useEffect, useState, useRef } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconButton, useColorModeValue } from "@chakra-ui/react";

export const ScrollToTop = () => {
  const darkTextColor = useColorModeValue("gray.600", "whiteAlpha.900");

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
          color={darkTextColor}
          border="2px"
          ref={scrollButton}
          position="fixed"
          zIndex={"999"}
          right="4rem"
          bottom="4rem"
          variant={"outline"}
          onClick={handleClick}
          rounded="xl"
          _hover={{
            cursor: "pointer",
          }}
        />
      ) : null}
    </>
  );
};
