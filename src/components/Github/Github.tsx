import React, { useState, useEffect } from 'react';
import { fetchGitHubUser, GitHubUser } from '../../services/githubService';
import GithubSkeletonLoader from './GithubSkeletonLoader';
import GithubProfile from './GithubProfile';
import GithubInput from './GithubInput';


const GitHubWidget = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');


  useEffect(() => {
    const storedUsername = localStorage.getItem('githubUsername');
    if (storedUsername) {
      setInputValue(storedUsername);
      getUserData(storedUsername);
    }
  }, []);

  const getUserData = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
      setInputValue("")
      localStorage.setItem('githubUsername', username);
    } catch (err) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  const removeUserData = () => {
    setUser(null);
    localStorage.removeItem("githubUsername")
  }

  if (loading || error) {
    return <GithubSkeletonLoader />;
  }

  return (
    <div>
      {user ? (
        <GithubProfile user={user} removeUserData={removeUserData} />
      ) : (
        <GithubInput inputValue={inputValue} setInputValue={setInputValue} getUserData={getUserData} />
      )}
    </div>
  );
};

export default GitHubWidget;
