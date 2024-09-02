import React, { useState } from 'react';

const LongestWord = () => {
  const [sentence, setSentence] = useState('');
  const [longestWord, setLongestWord] = useState('');

  const findLongestWord = (sentence) => {
    const words = sentence.split(' ').filter(word => word.trim().length > 0);
    if (words.length === 0) return '';

    return words.reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest;
    }, '');
  };

  const handleFindLongestWord = () => {
    if (sentence.trim()) {
      setLongestWord(findLongestWord(sentence));
    } else {
      setLongestWord('Please enter a valid sentence.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-4">Longest Word Finder</h1>
        <textarea
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-green-500"
          placeholder="Enter a sentence"
        />
        <button
          onClick={handleFindLongestWord}
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
        >
          Find Longest Word
        </button>
        {longestWord && (
          <div className={`mt-4 text-center text-lg font-semibold ${longestWord === 'Please enter a valid sentence.' ? 'text-red-600' : 'text-green-600'}`}>
            {longestWord}
          </div>
        )}
      </div>
    </div>
  );
};

export default LongestWord;
