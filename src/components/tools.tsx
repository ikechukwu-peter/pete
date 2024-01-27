import { Box, Flex, Heading } from "@chakra-ui/react";
import { SocialButton } from "./social-button";
import { IconType } from "react-icons";

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
}

export const Tools = ({ title, items, isTool }: ToolsProps) => {
  return (
    <div>
      <Box my="1.3rem" color="brand.300">
        <Heading>{title}</Heading>
        <ReusableToolList items={items} isTool={isTool} />
      </Box>
    </div>
  );
};

const ReusableToolList: React.FC<ListProps> = ({ items, isTool }) => {
  return (
    <Flex gap="1rem" wrap="wrap" my="1rem">
      {items.map(({ label, href, Icon }) => (
        <SocialButton
          key={label + href}
          label={label}
          href={href}
          isTool={isTool}
        >
          <Icon />
        </SocialButton>
      ))}
    </Flex>
  );
};
