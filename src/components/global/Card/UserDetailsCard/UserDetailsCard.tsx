import { Box, Center, HStack, Text, VStack, Skeleton } from "@chakra-ui/react";
import { FC } from "react";
import useUserDetails from "../../../../services/hooks/github/users/useUserDetails";
import ErrorHandler from "../../ErrorHandler/ErrorHandler";
import Header from "../../Typing/Header";
import UserBaseCard from "../UserBaseCard";
import UserReposList from "./UserReposList";

type UserDetailsCardProps = {
  username: string;
};

const UserDetailsCard: FC<UserDetailsCardProps> = ({ username }) => {
  const {
    data: detailsResponse,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useUserDetails(username);

  return (
    <Center>
      <Box
        bg="white"
        borderRadius="4px"
        w={{ base: "100%", md: "80%", lg: "60%" }}
        p="20px"
      >
        <ErrorHandler
          error={error}
          onRetry={refetch}
          isRetrying={isFetching}
          customMessage="Failed to fetch profile"
        />
        {isLoading ? (
          <Skeleton w="100%" h="200px" mb="10px" />
        ) : (
          detailsResponse?.data && (
            <>
              <Header fontWeight="700">Profile</Header>
              <UserBaseCard
                avatarSize="128px"
                customStyles={{ p: 0, pt: "20px", pb: "40px" }}
                avatarSrc={detailsResponse.data.avatar_url}
                profileLink={detailsResponse.data.html_url}
                userId={detailsResponse.data.id}
                userLogin={detailsResponse.data.login}
                userName={detailsResponse.data.name}
              />
              <Header pb="20px" fontWeight="700">
                Repositories
              </Header>
              <VStack align="flex-start" spacing="5px">
                <HStack fontSize="14px" lineHeight="14px">
                  <Text fontWeight="700">Repositories count:</Text>
                  <Text fontWeight="500">
                    {detailsResponse?.data?.public_repos ||
                      "no public repositories"}
                  </Text>
                </HStack>
                {detailsResponse.data.public_repos && (
                  <>
                    <VStack
                      fontSize="14px"
                      lineHeight="14px"
                      align="flex-start"
                      spacing="4px"
                      w="100%"
                    >
                      <Text fontWeight="700">Repositories list:</Text>
                    </VStack>
                    <UserReposList username={username} />
                  </>
                )}
              </VStack>
            </>
          )
        )}
      </Box>
    </Center>
  );
};

export default UserDetailsCard;
