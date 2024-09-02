import React, { useState } from 'react';

const ReverseString = () => {
  const [inputString, setInputString] = useState('');
  const [reversedString, setReversedString] = useState('');

  const handleReverseString = () => {
    if (!inputString.trim()) {
      setReversedString('Please enter a valid string.');
      return;
    }

    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
    }

    setReversedString(reversed);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-pink-800 mb-4">Reverse String</h1>
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-pink-500"
          placeholder="Enter a string"
        />
        <button
          onClick={handleReverseString}
          className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-pink-700"
        >
          Reverse
        </button>
        {reversedString && (
          <div className={`mt-4 text-center text-lg font-semibold ${reversedString === 'Please enter a valid string.' ? 'text-red-600' : 'text-pink-600'}`}>
            {reversedString}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReverseString;
