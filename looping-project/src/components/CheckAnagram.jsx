import React, { useState } from 'react';

const CheckAnagram = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [isAnagram, setIsAnagram] = useState(null);

  const handleCheckAnagram = () => {
    const sortedString1 = string1.split('').sort().join('').trim();
    const sortedString2 = string2.split('').sort().join('').trim();

    if (sortedString1 && sortedString2 && sortedString1 === sortedString2) {
      setIsAnagram(true);
    } else {
      setIsAnagram(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-zinc-800 mb-4">Check Anagram</h1>
        <input
          type="text"
          value={string1}
          onChange={(e) => setString1(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-zinc-500"
          placeholder="Enter first string"
        />
        <input
          type="text"
          value={string2}
          onChange={(e) => setString2(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-zinc-500"
          placeholder="Enter second string"
        />
        <button
          onClick={handleCheckAnagram}
          className="w-full bg-zinc-600 text-white font-bold py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:bg-zinc-700"
        >
          Check if Anagram
        </button>
        {isAnagram !== null && (
          <div className={`mt-4 text-center text-lg font-semibold ${isAnagram ? 'text-zinc-600' : 'text-red-600'}`}>
            {isAnagram ? 'The strings are anagrams.' : 'The strings are not anagrams.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckAnagram;
