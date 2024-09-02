import React, { useState } from 'react';

const RemoveDuplicates = () => {
  const [inputArray, setInputArray] = useState('');
  const [resultArray, setResultArray] = useState([]);

  const handleRemoveDuplicates = () => {
    if (!inputArray.trim()) {
      setResultArray('Please enter a valid array of numbers or words.');
      return;
    }

    const array = inputArray.split(',').map(item => item.trim());
    const uniqueArray = [...new Set(array)];

    setResultArray(uniqueArray.join(', '));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-cyan-800 mb-4">Remove Duplicates</h1>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-cyan-500"
          placeholder="Enter comma-separated values"
        />
        <button
          onClick={handleRemoveDuplicates}
          className="w-full bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
        >
          Remove Duplicates
        </button>
        {resultArray && (
          <div className={`mt-4 text-center text-lg font-semibold ${resultArray === 'Please enter a valid array of numbers or words.' ? 'text-red-600' : 'text-cyan-600'}`}>
            {resultArray}
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveDuplicates;
