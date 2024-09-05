import React, { useState, useEffect } from 'react';
import CounterButtons from './CounterButtons';
import CounterInputs from './CounterInputs';

 type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const Counter: React.FC = () => {
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeTextVisible, setTimeTextVisible] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning) {
      timer = setInterval(() => {
        updateTimer();
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const updateTimer = () => {
    const { hours, minutes, seconds } = time;

    if (seconds > 0) {
      setTime({ hours, minutes, seconds: seconds - 1 });
    } else if (minutes > 0) {
      setTime({ hours, minutes: minutes - 1, seconds: 59 });
    } else if (hours > 0) {
      setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
    } else {
      setIsRunning(false);
      setTimeTextVisible(false)
      alert("Timer Finished")
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: Math.max(0, parseInt(value)) });
  };

  const startTimer = () => {
    if (time.hours > 0 || time.minutes > 0 || time.seconds > 0) {
      setIsRunning(true);
      setTimeTextVisible(true)
    }
  };

  const formatTime = (time: Time) => {
    return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-full rounded-2xl bg-white gap-y-2 p-2 relative shadow-2xl">
      <div className="flex flex-col justify-center items-center gap-y-8 h-full">
        { timeTextVisible ? (
          <div className="text-5xl font-semibold font-mono">{formatTime(time)}</div>
        ) : (
          <CounterInputs time={time} handleInputChange={handleInputChange} isRunning={isRunning}  />
        )}
        <CounterButtons startTimer={startTimer} isRunning={isRunning} setIsRunning={setIsRunning} setTimeTextVisible={setTimeTextVisible} setTime={setTime} />
      </div>
    </div>
  );
};

export default Counter;
