import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PrimeNumber = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }

    setResult(isPrime(num) ? `${num} is a Prime Number` : `${num} is not a Prime Number`);
  };
  const resultTextColor = result === 'Please enter a valid number' || result.includes('is not a Prime Number')
  ? 'text-red-500'
  : 'text-green-500';

  return (
    <div>
      
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
       
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Prime Number Checker</h1>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Enter a number"
        />
        <button
          onClick={handleCheck}
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-blue-700"
        >
          Check
        </button>
        {result && (
          <div className={`mt-4 text-center text-lg font-semibold ${resultTextColor}`}>
            {result}
          </div>
        )}
      </div>
      <div className='bg-orange-300 hover:bg-orange-700 p-4 rounded-lg shadow-md max-w-sm w-full mt-8'>
    <Link to="/" className="flex justify-center text-orange-500  hover:underline p-4  text-sm font-medium">
                Home
              </Link>
        </div>
    </div>
    </div>
  );
};

export default PrimeNumber;
