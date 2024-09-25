import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';
import { useRecurrenceStore } from '../store/recurrenceStore';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { recurrence, setRecurrence } = useRecurrenceStore();

  const handleRecurrenceChange = (newRecurrence) => {
    setRecurrence({ ...recurrence, ...newRecurrence });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg space-y-4 border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pick a Start Date</h2>
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <RecurrenceOptions onChange={handleRecurrenceChange} />
      <DatePreview startDate={startDate} recurrence={recurrence} />
    </div>
  );
};

export default DatePickerComponent;
