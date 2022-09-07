import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import styles from "./styles/contentloader.module.css";

export default function Loader() {
  return (
    <Flex
      minW="100vw"
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("theme.100", "theme.500")}
    >
      <Box className={styles.contentloader}>
        {/* <Text as="span" color={useColorModeValue("theme.300", "theme.100")}>
          {" "}
          Loading...
        </Text> */}
      </Box>
    </Flex>
  );
}
