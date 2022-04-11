import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ghApiClientFetch } from "../../../networking/ghApiClient";
import { GitHubResponse, GitHubUserDetails } from "../types";

const useUserDetails = (username: string) => {
  return useQuery<GitHubResponse<GitHubUserDetails>, AxiosError>(
    ["github-users-list", username],
    () => ghApiClientFetch<GitHubUserDetails>(`users/${username}`),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
};

export default useUserDetails;
