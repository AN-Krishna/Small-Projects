import React, { useState } from 'react';

const CharacterCount = () => {
  const [inputString, setInputString] = useState('');
  const [charCount, setCharCount] = useState(null);

  const handleCountCharacters = () => {
    if (!inputString.trim()) {
      setCharCount('Please enter a valid string.');
      return;
    }

    const count = {};
    for (const char of inputString) {
      count[char] = count[char] ? count[char] + 1 : 1;
    }

    setCharCount(count);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-amber-800 mb-4">Character Count</h1>
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-amber-500"
          placeholder="Enter a string"
        />
        <button
          onClick={handleCountCharacters}
          className="w-full bg-amber-600 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:bg-amber-700"
        >
          Count Characters
        </button>
        {charCount !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${typeof charCount === 'string' ? 'text-red-600' : 'text-amber-600'}`}>
            {typeof charCount === 'string' 
              ? charCount 
              : `Character Counts: ${Object.entries(charCount).map(([char, count]) => `${char}: ${count}`).join(', ')}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCount;
