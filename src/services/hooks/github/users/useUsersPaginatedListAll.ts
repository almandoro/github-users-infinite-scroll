import { AxiosError } from "axios";
import { useInfiniteQuery } from "react-query";
import { ghApiClientFetch } from "../../../networking/ghApiClient";
import { GitHubListUser, GitHubResponse } from "../types";

const useUsersPaginatedListAll = () => {
  return useInfiniteQuery<GitHubResponse<GitHubListUser[]>, AxiosError>(
    "github-users-list",
    ({ pageParam }) =>
      ghApiClientFetch<GitHubListUser[]>(`users?since=${pageParam || "0"}`),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      getNextPageParam: (lastPage) => lastPage?.pagination?.next?.since,
    },
  );
};

export default useUsersPaginatedListAll;
