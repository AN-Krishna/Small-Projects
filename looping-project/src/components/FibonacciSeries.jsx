import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FibonacciSeries = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const generateFibonacci = (num) => {
    let fibSeries = [0, 1];
    for (let i = 2; i < num; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries.slice(0, num).join(', ');
  };

  const handleGenerate = () => {
    const num = parseInt(number);
    if (isNaN(num) || num <= 0) {
      setResult('Please enter a valid positive number');
      return;
    }

    setResult(generateFibonacci(num));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-yellow-800 mb-4">Fibonacci Series Generator</h1>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-yellow-500"
          placeholder="Enter a number"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        >
          Generate
        </button>
        {result && (
          <div className="mt-4 text-center text-lg font-semibold text-yellow-600">
            {result}
          </div>
        )}
      </div>
      <div className='bg-yellow-300 hover:bg-yellow-700 p-4 rounded-lg shadow-md max-w-sm w-full mt-8'>
    <Link to="/" className="flex justify-center text-white   hover:underline p-4  text-sm font-medium">
                Home
              </Link>
        </div>
    </div>
  );
};

export default FibonacciSeries;
