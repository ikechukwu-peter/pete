import { useAnimation } from "@codechem/chakra-ui-animations";
import {
  CustomHeading,
  letterVariants,
  staggerVariants,
} from "./animation/custom-elements";
import { Text } from "@chakra-ui/react";

export const Greeting = ({
  initial = "Hi,",
  other = "I'm Ikechukwu Peter",
}: {
  initial?: string;
  other?: string;
}) => {
  const animation = useAnimation("flash", {
    duration: 2000,
    iterationCount: "infinite",
  });
  return (
    <CustomHeading
      fontWeight={"900"}
      fontSize={{
        base: "1.8rem",
        md: "2rem",
        lg: "2.3rem",
        xl: "2.5rem",
      }}
      mb="1rem"
      _hover={{
        color: "brand.400",
      }}
      color="brand.800"
      whileHover={{
        textShadow: "0px 0px 8px rgba(8, 145, 178, 0.8)",
      }}
      variants={staggerVariants}
    >
      <Text as="span" animation={animation}>
        {initial}{" "}
      </Text>
      {Array.from(other).map((letter, index) => (
        <CustomHeading
          key={index}
          color={"brand.800"}
          _hover={{
            color: "brand.400",
            display: "inline-block",
            mr: "6px",
          }}
          display="inline-block"
          mr="4px"
          variants={letterVariants}
        >
          {letter}
        </CustomHeading>
      ))}
    </CustomHeading>
  );
};
