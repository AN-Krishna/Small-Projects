import React, { useState } from 'react';

const FindLargestInNestedArray = () => {
  const [inputArray, setInputArray] = useState('');
  const [largestElement, setLargestElement] = useState(null);

  const findLargest = (arr) => {
    let max = -Infinity;

    const flattenArray = (array) => {
      return array.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
      );
    };

    const flattenedArray = flattenArray(arr);
    max = Math.max(...flattenedArray);
    return max;
  };

  const handleFindLargest = () => {
    if (!inputArray.trim()) {
      setLargestElement('Please enter a valid nested array.');
      return;
    }

    try {
      const parsedArray = JSON.parse(inputArray);
      
      if (!Array.isArray(parsedArray)) {
        setLargestElement('Invalid format. Please enter a valid nested array.');
        return;
      }

      const largest = findLargest(parsedArray);
      setLargestElement(largest);
    } catch (error) {
      setLargestElement('Invalid input format. Please enter a valid JSON nested array.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-4">Find Largest Element in Nested Array</h1>
        <textarea
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-slate-500"
          placeholder='Enter nested array (e.g., [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]])'
          rows="4"
        />
        <button
          onClick={handleFindLargest}
          className="w-full bg-slate-600 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:bg-slate-700"
        >
          Find Largest Element
        </button>
        {largestElement !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${typeof largestElement === 'string' ? 'text-red-600' : 'text-slate-600'}`}>
            {typeof largestElement === 'string' ? largestElement : `Largest Element: ${largestElement}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindLargestInNestedArray;
