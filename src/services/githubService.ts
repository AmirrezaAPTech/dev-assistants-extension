import axios from 'axios';

export interface GitHubUser {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
}

export const fetchGitHubUser = async (username: string): Promise<GitHubUser> => {
  const response = await axios.get<GitHubUser>(`https://api.github.com/users/${username}`);
  return response.data;
};
