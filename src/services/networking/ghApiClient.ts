/* eslint-disable no-useless-catch */
import axios from "axios";
import parse from "parse-link-header";
import { GitHubResponse } from "../hooks/github/types";

const ghApiClient = axios.create({
  baseURL: process.env.REACT_APP_GH_API,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

const userName = process.env.REACT_APP_GH_USERNAME;
const personalToken = process.env.REACT_APP_GH_PERSONAL_ACCESS_TOKEN;

if (userName && personalToken) {
  const personalAuth = {
    username: userName,
    password: personalToken,
  };
  ghApiClient.defaults.auth = personalAuth;
}

export const ghApiClientFetch = async <T>(url: string) => {
  const { data, headers } = await ghApiClient.get<T>(url);
  const pagination = parse(headers.link);
  return { data, pagination } as GitHubResponse<T>;
};

export default ghApiClient;
