import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";

import { theme } from "./theme";

const OwnChakraProvider: FC = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
);

export default OwnChakraProvider;
