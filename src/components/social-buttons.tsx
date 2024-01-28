import { SocialButton } from "./social-button";
import { CustomBox } from "./animation/custom-elements";
import { socialLinks } from "@/data/links";
import { Flex } from "@chakra-ui/react";

export const SocialButtons = () => {
  return (
    <Flex gap="1rem" my="1.2rem">
      {socialLinks.map(({ url, Icon, name }, index) => (
        <CustomBox
          key={url}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 5 }}
        >
          <SocialButton href={url} label={name}>
            <Icon />
          </SocialButton>
        </CustomBox>
      ))}
    </Flex>
  );
};
