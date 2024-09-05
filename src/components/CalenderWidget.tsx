import React from 'react'
import { Calendar } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';



const CalenderWidget = () => {
    function renderCell() { 
        return null;
      }
      return (
        <div className='xl:w-[280px] w-full'>
          <Calendar compact bordered renderCell={renderCell} />
        </div>
      );
}

export default CalenderWidget