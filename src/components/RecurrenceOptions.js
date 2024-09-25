import React from 'react';
import { useRecurrenceStore } from '../store/recurrenceStore';

const RecurrenceOptions = ({ onChange }) => {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  const handlePatternChange = (event) => {
    const newPattern = event.target.value;
    onChange({ pattern: newPattern });
    setRecurrence({ ...recurrence, pattern: newPattern });
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Recurrence Pattern</h3>
      <select 
        value={recurrence.pattern} 
        onChange={handlePatternChange} 
        className="p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
