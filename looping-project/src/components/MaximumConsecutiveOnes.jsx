import React, { useState } from 'react';

const MaxConsecutiveOnes = () => {
  const [inputArray, setInputArray] = useState('');
  const [maxCount, setMaxCount] = useState(null);

  const handleMaxConsecutiveOnes = () => {
    if (!inputArray.trim()) {
      setMaxCount('Please enter a valid array.');
      return;
    }

    const array = inputArray.split(',').map(item => parseInt(item.trim(), 10));
    let maxConsecutiveOnes = 0;
    let currentCount = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 1) {
        currentCount++;
        maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentCount);
      } else {
        currentCount = 0;
      }
    }

    setMaxCount(maxConsecutiveOnes);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-red-800 mb-4">Max Consecutive 1's Finder</h1>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-red-500"
          placeholder="Enter comma-separated values (e.g., 1,0,1,1,0,1)"
        />
        <button
          onClick={handleMaxConsecutiveOnes}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
        >
          Find Max Consecutive 1's
        </button>
        {maxCount !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${maxCount === 'Please enter a valid array.' ? 'text-red-600' : 'text-red-600'}`}>
            {typeof maxCount === 'string' ? maxCount : `Max Consecutive 1's: ${maxCount}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default MaxConsecutiveOnes;
