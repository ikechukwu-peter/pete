import {
  Box,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const fade = keyframes`
0% : {
    opacity: 0.4
}
0% : {
    opacity: 0.8
}
0% : {
    opacity: 0.1
}
  
`;

const oscillate = keyframes`
0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
  
`;

export default function LoadingScreen() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${fade} fade 0.4s ease-in forwards`;

  const animation2 = prefersReducedMotion
    ? undefined
    : `${oscillate} oscillate 0.7s ease-in forwards infinite`;

  return (
    <Box
      position={"relative"}
      h="100vh"
      w={"100%"}
      opacity={0}
      animation={animation1}
    >
      <Box
        display={"flex"}
        top="50%"
        left="50%"
        transform={`translate('-50%, -50%')`}
      >
        <Box animation={animation2}></Box>
        <Box animation={animation2}></Box>
        <Box animation={animation2}></Box>
      </Box>
    </Box>
  );
}
