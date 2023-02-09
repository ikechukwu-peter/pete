import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Card = () => {
  return (
    <Box>
      <Image
        src={"/pete.png"}
        alt="Ikechukwu's Picture"
        width={400}
        height={400}
        priority
      />
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
