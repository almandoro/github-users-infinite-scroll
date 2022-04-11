import {
  Flex,
  HStack,
  Avatar,
  VStack,
  Text,
  Link,
  FlexProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { GitHubLogoIcon } from "../../../assets/icons";
import TeamTag from "../TeamTag/TeamTag";
import Header from "../Typing/Header";

export type UserBaseCardProps = {
  avatarSize?: string;
  avatarSrc?: string;
  customStyles?: FlexProps;
  profileLink: string;
  userId: number;
  userLogin: string;
  userName?: string;
};

const UserBaseCard: FC<UserBaseCardProps> = ({
  avatarSize = "76px",
  avatarSrc,
  customStyles,
  profileLink,
  userId,
  userLogin,
  userName,
}) => {
  return (
    <Flex p="20px" overflow="hidden" {...customStyles}>
      <HStack w="100%" spacing="12px" align="flex-start">
        <Avatar boxSize={avatarSize} borderRadius="4px" src={avatarSrc} />
        <VStack
          h="100%"
          w="inherit"
          spacing="6px"
          align="flex-start"
          wordBreak="break-all"
        >
          {userName && <Header fontWeight="600">{userName}</Header>}
          <Text
            color="text.base"
            fontSize="18px"
            lineHeight="18px"
            fontWeight="500"
          >
            @{userLogin}
          </Text>
          <HStack>
            <TeamTag userId={+userId} />
            <Text color="text.secondary" fontSize="12px" lineHeight="12px">
              ID: #{userId}
            </Text>
          </HStack>
          <HStack
            h="100%"
            alignItems="flex-end"
            color="text.secondary"
            fontSize="12px"
            lineHeight="12px"
            spacing="4px"
          >
            <GitHubLogoIcon />
            <Link isExternal href={profileLink}>
              <Text>GitHub page</Text>
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default UserBaseCard;
