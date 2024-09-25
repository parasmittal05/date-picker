import React from 'react';
import { format, addDays, addMonths, addYears } from 'date-fns';

const DatePreview = ({ startDate, recurrence }) => {
  const generateDates = () => {
    const dates = [];
    let currentDate = startDate;
    
    for (let i = 0; i < 10; i++) {
      dates.push(currentDate);

      switch (recurrence.pattern) {
        case 'daily':
          currentDate = addDays(currentDate, 1);
          break;
        case 'weekly':
          currentDate = addDays(currentDate, 7);
          break;
        case 'monthly':
          currentDate = addMonths(currentDate, 1);
          break;
        case 'yearly':
          currentDate = addYears(currentDate, 1);
          break;
        default:
          break;
      }
    }
    return dates;
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Next Occurrences</h3>
      <ul className="list-disc pl-5 space-y-1">
        {generateDates().map((date, index) => (
          <li key={index} className="text-gray-700">
            {format(date, 'PP')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatePreview;
