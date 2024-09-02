import React, { useState } from 'react';

const EvenNumbers = () => {
  const [inputArray, setInputArray] = useState('');
  const [evenNumbers, setEvenNumbers] = useState(null);

  const handleFindEvenNumbers = () => {
    if (!inputArray.trim()) {
      setEvenNumbers('Please enter a valid array.');
      return;
    }

    const array = inputArray.split(',').map(item => parseInt(item.trim(), 10));

    if (array.some(isNaN)) {
      setEvenNumbers('Please enter only numbers.');
      return;
    }

    const evenNums = array.filter(num => num % 2 === 0);
    setEvenNumbers(evenNums);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-fuchsia-800 mb-4">Even Numbers Finder</h1>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-fuchsia-500"
          placeholder="Enter comma-separated numbers"
        />
        <button
          onClick={handleFindEvenNumbers}
          className="w-full bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:bg-fuchsia-700"
        >
          Find Even Numbers
        </button>
        {evenNumbers !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${typeof evenNumbers === 'string' ? 'text-red-600' : 'text-fuchsia-600'}`}>
            {typeof evenNumbers === 'string' ? evenNumbers : `Even Numbers: [${evenNumbers.join(', ')}]`}
          </div>
        )}
      </div>
    </div>
  );
};

export default EvenNumbers;
