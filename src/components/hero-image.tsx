import { Box, chakra, Image } from "@chakra-ui/react";
// import Image from "next/image";

// const ChakraImage = chakra(Image, {
//   shouldForwardProp: (prop) =>
//     ["src", "width", "height", "alt", "priority"].includes(prop),
// });

export const HeroImage = ({
  url,
  alt,
  width = 400,
  height = 500,
  rounded,
}: {
  url: string;
  alt: string;
  width: number | string;
  height: number | string;
  rounded?: string;
}) => {
  return (
    <Box
      position="relative"
      width="100%"
      height="80%"
      _hover={{
        opacity: 0.8,
      }}
      filter={"brightness(0.8)"}
    >
      <Image
        borderRadius="50%"
        as={Image}
        src={url}
        alt={alt}
        width={width}
        height={height}
        rounded={rounded}
      />
    </Box>
  );
};
