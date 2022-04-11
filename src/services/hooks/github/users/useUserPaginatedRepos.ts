import { AxiosError } from "axios";
import { useInfiniteQuery } from "react-query";
import { ghApiClientFetch } from "../../../networking/ghApiClient";
import { GitHubResponse, GitHubUserRepos } from "../types";

const useUserPaginatedRepos = (username: string) => {
  return useInfiniteQuery<GitHubResponse<GitHubUserRepos[]>, AxiosError>(
    ["github-user-repos", username],
    ({ pageParam }) =>
      ghApiClientFetch<GitHubUserRepos[]>(
        `users/${username}/repos${pageParam ? `?page=${pageParam}` : ""}`,
      ),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      getNextPageParam: (lastPage) => lastPage?.pagination?.next?.page,
    },
  );
};

export default useUserPaginatedRepos;
