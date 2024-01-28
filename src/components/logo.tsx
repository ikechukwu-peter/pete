import NextLink from "next/link";
import { Box } from "@chakra-ui/react";
import {
  CustomBox,
  CustomSpan,
  letterVariants,
  staggerVariants,
} from "./animation/custom-elements";

const logoName = "Ikechukwu.";

export const Logo = () => {
  return (
    <CustomBox
      initial="hidden"
      animate="visible"
      variants={staggerVariants}
      whileHover={{
        scale: 1.05,
        textShadow: "0px 0px 8px rgba(8, 145, 178, 0.8)",
      }}
    >
      <NextLink href={"/"}>
        <Box
          as="h2"
          fontSize={{ base: "1rem", lg: "1.5rem" }}
          shadow="xl"
          textTransform="uppercase"
          fontWeight={{ base: "500", md: "700" }}
          _hover={{
            color: "brand.400",
            transition: "color 0.3s ease-in-out",
          }}
          gap="0"
        >
          {Array.from(logoName).map((letter, index) => (
            <CustomSpan
              key={index}
              variants={letterVariants}
              _hover={{
                display: "inline-block",
                mr: "4px",
              }}
              //   display="inline-block"
              //   mr="4px"
            >
              {letter}
            </CustomSpan>
          ))}
        </Box>
      </NextLink>
    </CustomBox>
  );
};
