import React, { useState } from 'react';

const AscendingSortArray = () => {
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState(null);

  const handleSortArray = () => {
    if (!inputArray.trim()) {
      setSortedArray('Please enter a valid array.');
      return;
    }

    const array = inputArray.split(',').map(item => parseFloat(item.trim()));

    if (array.some(isNaN)) {
      setSortedArray('Please enter only numbers.');
      return;
    }

    const sorted = array.sort((a, b) => a - b);
    setSortedArray(sorted);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-rose-800 mb-4">Ascending Sort Array</h1>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-rose-500"
          placeholder="Enter comma-separated numbers"
        />
        <button
          onClick={handleSortArray}
          className="w-full bg-rose-600 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-700 focus:outline-none focus:bg-rose-700"
        >
          Sort Array
        </button>
        {sortedArray !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${typeof sortedArray === 'string' ? 'text-red-600' : 'text-rose-600'}`}>
            {typeof sortedArray === 'string'
              ? sortedArray
              : `Sorted Array: [${sortedArray.join(', ')}]`}
          </div>
        )}
      </div>
    </div>
  );
};

export default AscendingSortArray;
