import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Palindrome = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  };

  const handleCheck = () => {
    if (!input) {
      setResult('Please enter a valid input');
      return;
    }

    if (isPalindrome(input)) {
      setResult(`"${input}" is a Palindrome`);
    } else {
      setResult(`"${input}" is not a Palindrome`);
    }
  };

  const resultTextColor = result === 'Please enter a valid input' || result.includes('not a Palindrome')
    ? 'text-red-600'
    : 'text-purple-600';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-4">Palindrome Checker</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-purple-500"
          placeholder="Enter a word or number"
        />
        <button
          onClick={handleCheck}
          className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
        >
          Check
        </button>
        {result && (
          <div className={`mt-4 text-center text-lg font-semibold ${resultTextColor}`}>
            {result}
          </div>
        )}
      </div>
      {/* <div className='bg-purple-300 hover:bg-purple-700 p-4 rounded-lg shadow-md max-w-sm w-full mt-8'>
    <Link to="/" className="flex justify-center text-white  hover:underline p-4  text-sm font-medium">
                Home
              </Link>
        </div> */}
    </div>
  );
};

export default Palindrome;
