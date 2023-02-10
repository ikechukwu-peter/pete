import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { IPROJECT } from "@/types/projects";

import styles from "../styles/card.module.css";
import { SocialButton } from "./social-button";

export const Card = ({ title, imgSrc, url, skills }: IPROJECT) => {
  return (
    <Box
      className={styles.boxanime}
      boxShadow="lg"
      rounded="md"
      p="1rem 1.2rem"
      mr={{ base: "0", lg: "1rem" }}
    >
      <NextLink href={url} target="_blank">
        <Image src={imgSrc} alt={title} width={400} height={400} priority />
        <Flex className={styles.boxflex} justifyContent="space-evenly">
          {skills.map(({ color, Icon, techTitle }) => {
            return (
              <Tooltip
                key={color}
                label={techTitle}
                placement="top"
                borderRadius="4"
              >
                <Box pr=".5rem">
                  <SocialButton label={techTitle} href="">
                    <Icon color={color} size="25px" />
                  </SocialButton>
                </Box>
              </Tooltip>
            );
          })}
        </Flex>
      </NextLink>
    </Box>
  );
};

{
  /**

<Box
							key={project.title}
							className={styles.boxanime}
							boxShadow="lg"
							rounded="md"
							p="1rem 1.2rem"
							mr={{ base: "0", lg: "1rem" }}
						>
							<Link href={"works/" + project.title}>
								<Image src={project.imgsrc} alt={project.title} rounded="md" />
								<Flex className={styles.boxflex} justifyContent="space-evenly">
									{project.skills.map((tool) => {
										return (
											<Tooltip
												key={tool.color}
												label={tool.techTitle}
												placement="top"
												borderRadius="4"
											>
												<Box
													bg={colorSelect}
													p="0.5rem 0.7rem"
													mr="1rem"
													borderRadius="0.3rem"
												>
													<tool.tech color={tool.color} size="25px" />
												</Box>
											</Tooltip>
										);
									})}
								</Flex>
							</Link>
						</Box>
	
*/
}
