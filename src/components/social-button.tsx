import { ReactNode } from "react";
import { chakra, VisuallyHidden } from "@chakra-ui/react";
import { CustomBox } from "./animation/custom-elements";

export const SocialButton = ({
  children,
  label,
  href,
  isTool = false,
}: {
  children: ReactNode;
  label: string;
  href: string;
  isTool?: boolean;
}) => {
  return (
    <CustomBox
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9, rotate: 360 }}
    >
      <chakra.button
        bg="brand.300"
        rounded={"full"}
        w={isTool ? 16 : 10}
        h={isTool ? 16 : 10}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 1.3s ease"}
        _hover={{ bg: "brand.400", color: "brand.800" }}
        target="_blank"
        color={"brand.700"}
        fontSize={isTool ? "1.5rem" : "1rem"}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </CustomBox>
  );
};
