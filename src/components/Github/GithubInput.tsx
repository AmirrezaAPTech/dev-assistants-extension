import React from 'react'
import githubImg from '../../../public/github.svg';

interface GithubInputProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    getUserData: Function;
}

const GithubInput: React.FC<GithubInputProps> = ({inputValue, setInputValue, getUserData}) => {
  return (
    <div>
         <div className="flex flex-col justify-between items-center h-32">
          <div className="flex justify-center items-center gap-x-2">
            <img src={githubImg} alt="githubImg" className="w-6 h-6" />
            <label htmlFor="githubInput" className="text-black font-semibold font-mono">
              Enter Your Github Username
            </label>
          </div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            id="githubInput"
            className="w-full py-2 rounded-xl border border-[#666666] px-3"
          />
          <button onClick={() => getUserData(inputValue!)} className="bg-[#6d31b1] text-white text-[14px] px-4 py-1 rounded-xl">
            Submit
          </button>
        </div>
    </div>
  )
}

export default GithubInput