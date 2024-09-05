import React from 'react'

type Time = {
    hours: number;
    minutes: number;
    seconds: number;
  };

interface CounterButtonsProps {
    startTimer: () => void;
    isRunning: boolean;
    setIsRunning: (x: boolean) => void;
    setTimeTextVisible: (x: boolean) => void;
    setTime: (x: Time) => void;
}

const CounterButtons: React.FC<CounterButtonsProps> = ({
    startTimer,
    isRunning,
    setIsRunning,
    setTimeTextVisible,
    setTime,
  }) => {
  return (
    <div>
         {!isRunning ? (
          <button
            onClick={startTimer}
            className="bg-blue-500 text-white rounded-md px-6 py-2 font-semibold"
            disabled={isRunning}>
            Start
          </button>
        ) : (
          <div className="flex justify-center items-start gap-x-3">
            <button onClick={() => (setIsRunning(false), setTimeTextVisible(true))} className="border rounded-lg px-4 py-2 font-semibold">
              Pause
            </button>
            <button
              onClick={() => (setTime({ hours: 0, minutes: 0, seconds: 0 }), setIsRunning(false), setTimeTextVisible(false))}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold">
              Done
            </button>
          </div>
        )}
    </div>
  )
}

export default CounterButtons