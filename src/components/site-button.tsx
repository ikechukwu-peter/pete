import { Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

export const SiteButton = ({
  title,
  ButtonIcon,
  isIcon = false,
}: {
  title: string;
  ButtonIcon?: IconType;
  isIcon?: boolean;
}) => {
  return (
    <>
      {isIcon && ButtonIcon ? (
        <Button
          rightIcon={<ButtonIcon />}
          color="brand.300"
          bg={"transparent"}
          borderWidth="2px"
          borderColor={"brand.400"}
          boxShadow={" 1px 1px 1px  rgb(8,145,178)"}
          textDecor="none"
          _hover={{
            bg: "brand.400",
          }}
          _focus={{
            bg: "brand.400",
            border: "none",
          }}
          _active={{
            bg: "brand.400",
            border: "none",
          }}
          mb={["2rem", "2rem", "3rem", "4rem"]}
          transition="background 1s ease"
        >
          {title}
        </Button>
      ) : (
        <Button
          color="brand.300"
          bg={"transparent"}
          borderWidth="2px"
          borderColor={"brand.400"}
          boxShadow={" 1px 1px 1px  rgb(8,145,178)"}
          textDecor="none"
          _hover={{
            bg: "brand.400",
          }}
          _focus={{
            bg: "brand.400",
            border: "none",
          }}
          _active={{
            bg: "brand.400",
            border: "none",
          }}
          mb={["2rem", "2rem", "3rem", "4rem"]}
          transition="background 1s ease"
        >
          {title}
        </Button>
      )}
    </>
  );
};
