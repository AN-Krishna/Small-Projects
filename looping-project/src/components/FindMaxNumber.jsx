import React, { useState } from 'react';

const FindMaxNumber = () => {
  const [inputArray, setInputArray] = useState('');
  const [maxNumber, setMaxNumber] = useState(null);

  const handleFindMaxNumber = () => {
    if (!inputArray.trim()) {
      setMaxNumber('Please enter a valid array.');
      return;
    }

    const array = inputArray.split(',').map(item => parseInt(item.trim(), 10));
    if (array.some(isNaN)) {
      setMaxNumber('Please enter only numbers.');
      return;
    }

    const max = Math.max(...array);
    setMaxNumber(max);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-emerald-800 mb-4">Find Maximum Number</h1>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-emerald-500"
          placeholder="Enter comma-separated numbers"
        />
        <button
          onClick={handleFindMaxNumber}
          className="w-full bg-emerald-600 text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700"
        >
          Find Max
        </button>
        {maxNumber !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${maxNumber === 'Please enter a valid array.' || maxNumber === 'Please enter only numbers.' ? 'text-red-600' : 'text-emerald-600'}`}>
            {typeof maxNumber === 'string' ? maxNumber : `Maximum Number: ${maxNumber}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindMaxNumber;
