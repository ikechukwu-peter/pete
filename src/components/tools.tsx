import { Box, Flex, Heading } from "@chakra-ui/react";
import { SocialButton } from "./social-button";
import { IconType } from "react-icons";
import {
  CustomBox,
  CustomHeading,
  slideInRightVariants,
} from "./animation/custom-elements";

interface ListItem {
  label: string;
  href: string;
  Icon: IconType;
}

interface ListProps {
  items: ListItem[];
  isTool?: boolean;
}
interface ToolsProps extends ListProps {
  title: string;
  duration?: number;
}

export const Tools = ({ title, items, isTool, duration = 2 }: ToolsProps) => {
  return (
    <CustomBox
      initial="hidden"
      variants={slideInRightVariants}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration, ease: "easeInOut" },
      }}
    >
      <Box my="1.3rem" color="brand.300">
        <CustomHeading
          initial="hidden"
          variants={slideInRightVariants}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration, ease: "easeInOut" },
          }}
        >
          <Heading
            color="brand.300"
            _hover={{
              color: "brand.400",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {title}
          </Heading>
        </CustomHeading>
        <CustomBox
          initial="hidden"
          variants={slideInRightVariants}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: duration * 1.25, ease: "easeInOut" },
          }}
        >
          <ReusableToolList items={items} isTool={isTool} />
        </CustomBox>
      </Box>
    </CustomBox>
  );
};

const ReusableToolList: React.FC<ListProps> = ({ items, isTool }) => {
  return (
    <Flex gap="1rem" wrap="wrap" my="1rem">
      {items.map(({ label, href, Icon }, index) => (
        <CustomBox
          key={label + href}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 5 }}
        >
          <SocialButton label={label} href={href} isTool={isTool}>
            <Icon />
          </SocialButton>
        </CustomBox>
      ))}
    </Flex>
  );
};
