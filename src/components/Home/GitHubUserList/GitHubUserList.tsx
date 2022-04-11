import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GitHubListUser } from "../../../services/hooks/github/types";
import useUsersPaginatedListAll from "../../../services/hooks/github/users/useUsersPaginatedListAll";
import UserListCard from "../../global/Card/UserListCard";
import ErrorHandler from "../../global/ErrorHandler/ErrorHandler";
import ListGrid from "./ListGrid";
import ListLoader from "./ListLoader";

const GitHubUserList = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    error,
    refetch,
    isFetching,
  } = useUsersPaginatedListAll();

  const [gitHubUsers, setGitHubUsers] = useState<GitHubListUser[]>([]);

  useEffect(() => {
    if (!data?.pages) return;

    const users = data.pages.flatMap((page) => page.data);
    if (users) setGitHubUsers(users);
  }, [data]);

  const mappedUsers = useMemo(() => {
    return gitHubUsers.map((user) => (
      <UserListCard
        key={user.id}
        userId={user.id}
        profileLink={user.html_url}
        userLogin={user.login}
        avatarSrc={user.avatar_url}
      />
    ));
  }, [gitHubUsers]);

  return (
    <>
      <ErrorHandler error={error} onRetry={refetch} isRetrying={isFetching} />
      {isLoading ? (
        <ListLoader isLoaded={!isLoading} />
      ) : (
        <InfiniteScroll
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          dataLength={gitHubUsers.length}
          loader={
            <ListLoader isLoaded={!isFetching} containerProps={{ pt: 4 }} />
          }
        >
          <ListGrid>{mappedUsers}</ListGrid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default GitHubUserList;
