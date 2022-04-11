import { Flex, HStack, Link } from "@chakra-ui/react";
import { Link as ReactLink, useLocation } from "react-router-dom";
import { GitHubLogoIcon } from "../../assets/icons";
import AppRoute from "../../types/AppRoute";
import Header from "./Typing/Header";

const NavBar = () => {
  const { pathname } = useLocation();
  const renderBackButton = pathname !== AppRoute.HomePage;
  return (
    <Flex
      bg="white"
      w={{ base: "100%", sm: "95%", md: "80%", lg: "60%" }}
      p="20px"
      align="center"
      justify="space-around"
      wrap={{ base: "wrap", sm: "unset" }}
    >
      {renderBackButton && (
        <Link as={ReactLink} to="/" color="pressable" fontWeight="500">
          Back
        </Link>
      )}
      <HStack w="100%" spacing={3} justifyContent="center">
        <Link href="https://github.com" isExternal>
          <GitHubLogoIcon boxSize="48px" />
        </Link>
        <Header>GitHub users</Header>
      </HStack>
    </Flex>
  );
};

export default NavBar;
