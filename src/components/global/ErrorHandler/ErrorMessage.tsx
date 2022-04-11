import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

const ErrorMessage: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      bg="red.300"
      fontWeight="600"
      border="2px solid"
      borderColor="red.100"
      color="white"
      w="100%"
      p={2}
      borderRadius="4px"
      textAlign="center"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ErrorMessage;
