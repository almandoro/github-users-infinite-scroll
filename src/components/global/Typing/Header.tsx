import { Text, TextProps } from "@chakra-ui/react";
import React, { FC } from "react";

const Header: FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text fontSize="24px" lineHeight="24px" fontWeight="500" {...rest}>
      {children}
    </Text>
  );
};

export default Header;
