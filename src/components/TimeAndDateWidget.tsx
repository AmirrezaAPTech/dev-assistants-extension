import React, { useState, useEffect } from 'react';
import WatchIcon from '../../public/ClockAnimation.gif';
import CoffeeImg from '../../public/Coffee.png';

const TimeAndDateWidget = () => {
  const [time, setTime] = useState('');
  const [gregorianDate, setGregorianDate] = useState({ day: '', month: '' });
  const [persianDate, setPersianDate] = useState({ day: '', month: '' });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);

      const gregorianOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
      const persianOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', calendar: 'persian' };

      const gregorianFormatter = new Intl.DateTimeFormat('en-US', gregorianOptions);
      const persianFormatter = new Intl.DateTimeFormat('fa-IR', persianOptions);

      const [gregorianDay, gregorianMonth] = gregorianFormatter.format(now).split(' ');
      setGregorianDate({ day: gregorianDay, month: gregorianMonth });

      const [persianMonth, persianDay] = persianFormatter.format(now).split(' ');
      setPersianDate({ day: persianDay, month: persianMonth });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-white flex flex-col justify-start items-center gap-y-2 relative shadow-2xl">
      <img src={WatchIcon} alt="watch" className="absolute top-2 right-4 w-9" />
      <h2 className="text-4xl font-semibold text-[#7234b9]">{time}</h2>
      <div className="flex justify-center items-center gap-x-3 font-semibold py-2">
        <div className="flex justify-center items-start gap-x-1">
          <span className="text-2xl">{gregorianDate.day}</span>
          <p className="text-xl">{gregorianDate.month}</p>
        </div>
        <div className="w-[1px] h-full bg-[#EEEEEE]"></div>
        <div className="flex justify-center items-start gap-x-1">
          <p className="text-xl">{persianDate.month}</p>
          <span className="text-2xl">{persianDate.day}</span>
        </div>
      </div>
      <div className='h-9 flex justify-center items-center font-semibold font-mono'>
      <p>Better coffee, better code.</p>
      <img src={CoffeeImg} alt="CoffeeImg" className='w-8 h-8' />
      </div>
    </div>
  );
};

export default TimeAndDateWidget;
