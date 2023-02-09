import { Flex } from "@chakra-ui/react";

import styles from "./ui-loader.module.css";

export const UILoader = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center" bg="brand.700">
      <span className={styles.loader}></span>
    </Flex>
  );
};
