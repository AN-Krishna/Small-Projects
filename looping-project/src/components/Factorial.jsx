import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Factorial = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateFactorial = (num) => {
    if (num < 0) return 'Invalid input';
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const handleCalculate = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      setResult('Please enter a valid non-negative number');
      return;
    }

    setResult(`${num}! = ${calculateFactorial(num)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-800 mb-4">Factorial Calculator</h1>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-indigo-500"
          placeholder="Enter a number"
        />
        <button
          onClick={handleCalculate}
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Calculate
        </button>
        {result && (
          <div className="mt-4 text-center text-lg font-semibold text-indigo-600">
            {result}
          </div>
        )}
      </div>
      <div className='bg-indigo-300 hover:bg-indigo-700 p-4 rounded-lg shadow-md max-w-sm w-full mt-8'>
    <Link to="/" className="flex justify-center text-white  hover:underline p-4  text-sm font-medium">
                Home
              </Link>
        </div>
    </div>
  );
};

export default Factorial;
