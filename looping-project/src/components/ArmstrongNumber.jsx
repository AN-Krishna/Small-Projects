import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArmstrongNumber = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const len = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), len), 0);
    return sum === num;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }

    setResult(isArmstrong(num) ? `${num} is an Armstrong Number` : `${num} is not an Armstrong Number`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-teal-800 mb-4">Armstrong Number Checker</h1>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-teal-500"
          placeholder="Enter a number"
        />
        <button
          onClick={handleCheck}
          className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-teal-700"
        >
          Check
        </button>
        {result && (
          <div className={`mt-4 text-center text-lg font-semibold ${result.includes('not') ? 'text-red-600' : 'text-teal-600'}`}>
            {result}
          </div>
        )}
      </div>
      <div className='bg-teal-300 hover:bg-teal-700 p-4 rounded-lg shadow-md max-w-sm w-full mt-8'>
    <Link to="/" className="flex justify-center text-white  hover:underline p-4  text-sm font-medium">
                Home
              </Link>
        </div>
    </div>
  );
};

export default ArmstrongNumber;
