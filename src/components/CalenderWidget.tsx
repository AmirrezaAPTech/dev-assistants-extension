import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../newtab/NewTab.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderWidget = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='h-full xl:w-full flex justify-center items-center'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalenderWidget;
