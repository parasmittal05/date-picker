import React from 'react';
import DatePickerComponent from '../components/DatePicker';

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Recurring Date Picker</h1>
      <DatePickerComponent />
    </div>
  );
}
