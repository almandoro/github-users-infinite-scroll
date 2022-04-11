import { Box, StackProps, VStack } from "@chakra-ui/react";
import { FC } from "react";
import NavBar from "./NavBar";

type MainProps = {
  withNavBar?: boolean;
  containerProps?: StackProps;
};

const Main: FC<MainProps> = ({
  withNavBar = true,
  children,
  containerProps,
}) => {
  return (
    <VStack
      minH="100vh"
      w="100%"
      spacing={0}
      align="center"
      {...containerProps}
      sx={{
        div: {
          maxW: "1130px",
        },
      }}
    >
      {withNavBar && <NavBar />}
      <Box w="100%" flex={1} bg="background" p="30px">
        {children}
      </Box>
    </VStack>
  );
};

export default Main;
