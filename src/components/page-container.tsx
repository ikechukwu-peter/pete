import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      as="main"
      zIndex={10}
      w="100%"
      bg="brand.700"
      h="100vh"
      px={{ base: "1.5rem", md: "2rem", lg: "4rem" }}
      pt="1rem"
      pos="relative"
    >
      {children}
    </Box>
  );
};
