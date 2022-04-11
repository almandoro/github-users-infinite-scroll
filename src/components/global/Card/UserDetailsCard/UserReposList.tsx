import { UnorderedList, ListItem, Button, Skeleton } from "@chakra-ui/react";
import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import { GitHubUserRepos } from "../../../../services/hooks/github/types";
import useUserPaginatedRepos from "../../../../services/hooks/github/users/useUserPaginatedRepos";
import ErrorHandler from "../../ErrorHandler/ErrorHandler";

type UserRepoListProps = {
  username: string;
};

const UserReposList: FC<UserRepoListProps> = ({ username }) => {
  const listEndRef = useRef<HTMLDivElement>(null);

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useUserPaginatedRepos(username);

  const [userRepos, setUserRepos] = useState<GitHubUserRepos[]>([]);

  useEffect(() => {
    if (!data?.pages) return;

    const repos = data.pages.flatMap((page) => page.data);
    if (repos) setUserRepos(repos);
  }, [data]);

  useEffect(() => {
    listEndRef.current?.scrollIntoView();
  }, [userRepos]);

  const mappedRepos = useMemo(() => {
    return userRepos.map((repo) => (
      <ListItem key={repo.id}>{repo.name}</ListItem>
    ));
  }, [userRepos]);

  const handleFetchMore = () => {
    fetchNextPage();
  };

  return (
    <>
      <ErrorHandler
        error={error}
        customMessage="Failed to fetch repositories"
      />
      {isLoading ? (
        <Skeleton h="60px" w="100%" />
      ) : (
        <UnorderedList
          w="100%"
          pl="20px"
          fontSize="12px"
          fontWeight="500"
          maxH={{ base: "100px", sm: "250px" }}
          overflowY="scroll"
        >
          {mappedRepos}
          <div ref={listEndRef} />
        </UnorderedList>
      )}
      {hasNextPage && (
        <Button
          color="pressable"
          isLoading={isFetchingNextPage}
          onClick={handleFetchMore}
        >
          Fetch More Repos
        </Button>
      )}
    </>
  );
};

export default memo(UserReposList);
