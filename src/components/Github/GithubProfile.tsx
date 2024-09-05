import React from 'react'
import { GitHubUser } from '../../services/githubService'
import UsersIcon from '../../../public/usersIcon.svg';
import flagIcon from '../../../public/flag.svg';

interface GithubProfileProps {
    user: GitHubUser;
    removeUserData: Function;
}

const GithubProfile: React.FC<GithubProfileProps> = ({user, removeUserData}) => {
  return (
    <a href={`https://github.com/${user.login}`} className='group relative'>
          <div className="w-full flex justify-start items-start h-full p-1 gap-x-2">
            <div className='w-[80px] h-[80px] rounded-full bg-[#EEEEEE] overflow-hidden flex-shrink-0'>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="rounded-full w-full h-full" />
            </div>
            <div className="h-full flex flex-col justify-between items-start w-full py-4">
              <div>
                <h2 className="text-[14px] font-semibold line-clamp-1">{user.login}</h2>
                <h2 className="line-clamp-3">{user.bio}</h2>
              </div>
            </div>
          </div>
          <div className="pt-1">
            <div className="flex justify-start items-center px-3">
              <img src={UsersIcon} alt="UsersIcon" className="w-4" />
              <div>
                <span className="font-semibold">{user.followers}</span>{' '}
                <span className="text-[11px]">Followers</span>
              </div>
              <div>
                {' '}
                . <span className="font-semibold">{user.following}</span>{' '}
                <span className="text-[11px]">Following</span>
              </div>
            </div>
            <div className="flex justify-normal items-center gap-x-1 px-3">
              <img src={flagIcon} alt="flagIcon" className="w-3" />
              <span className="text-[11px]">Repositories:</span>{' '}
              <span className="font-semibold">{user.public_repos}</span>
            </div>
          </div>
        <div onClick={(e) => (e.stopPropagation(), e.preventDefault(), removeUserData() )}  className={`absolute top-0 right-2 text-[#999999] text-[14px] opacity-0 group-hover:opacity-100 transition-all duration-200`}>✕</div>
        </a>
  )
}

export default GithubProfile