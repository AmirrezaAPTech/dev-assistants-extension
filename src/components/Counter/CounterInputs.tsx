import React from 'react'

type Time = {
    hours: number;
    minutes: number;
    seconds: number;
  };

interface CounterInputProps {
    time: Time;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRunning: boolean
}

const CounterInputs: React.FC<CounterInputProps> = ({time, handleInputChange, isRunning}) => {
  return (
             <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <label className="text-[#666666] text-[10px]" htmlFor="hours">Hours</label>
              <input
                type="number"
                name="hours"
                id="hours"
                value={time.hours}
                onChange={handleInputChange}
                className="border rounded-md py-2 w-16 text-center text-xl"
                min="0"
                disabled={isRunning}
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-[#666666] text-[10px]" htmlFor="minutes">Minutes</label>
              <input
                type="number"
                name="minutes"
                id="minutes"
                value={time.minutes}
                onChange={handleInputChange}
                className="border rounded-md py-2 w-16 text-center text-xl"
                min="0"
                disabled={isRunning}
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-[#666666] text-[10px]" htmlFor="seconds">Seconds</label>
              <input
                type="number"
                name="seconds"
                id="seconds"
                value={time.seconds}
                onChange={handleInputChange}
                className="border rounded-md py-2 w-16 text-center text-xl"
                min="0"
                disabled={isRunning}
              />
            </div>
          </div>
  )
}

export default CounterInputs