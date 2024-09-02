import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold p-8">Welcome to the Number App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className='bg-orange-500 hover:bg-orange-700 text-white p-4 rounded-lg shadow-md'>
          <Link to="/prime" className="hover:underline">Prime Number</Link>
        </div>
        <div className='bg-teal-500 hover:bg-teal-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/armstrong" className="flex justify-center hover:underline">Armstrong Number</Link>
        </div>
        <div className='bg-yellow-500 hover:bg-yellow-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/fibonacci" className="flex justify-center hover:underline">Fibonacci Series</Link>
        </div>
        <div className='bg-indigo-500 hover:bg-indigo-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/factorial" className="flex justify-center hover:underline">Factorial</Link>
        </div>
        <div className='bg-purple-500 hover:bg-purple-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/palindrome" className="flex justify-center hover:underline">Palindrome</Link>
        </div>
        <div className='bg-green-500 hover:bg-green-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/longest-word" className="flex justify-center hover:underline">Longest Word</Link>
        </div>
        <div className='bg-cyan-500 hover:bg-cyan-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/remove-duplicates" className="flex justify-center hover:underline">Remove Duplicates</Link>
        </div>
        <div className='bg-pink-500 hover:bg-pink-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/reverse-string" className="flex justify-center hover:underline">Reverse String</Link>
        </div>
        <div className='bg-red-500 hover:bg-red-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/max-consecutive-ones" className="flex justify-center hover:underline">Max. Consecutive Ones</Link>
        </div>
        <div className='bg-zinc-500 hover:bg-zinc-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/check-anagram" className="flex justify-center hover:underline">Anagram Checker</Link>
        </div>
        <div className='bg-emerald-500 hover:bg-emerald-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/find-max-number" className="flex justify-center hover:underline">Find Max. Number</Link>
        </div>
        <div className='bg-cyan-500 hover:bg-cyan-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/mergeandsortarrays" className="flex justify-center hover:underline">Merge and Sort Array</Link>
        </div>
        <div className='bg-fuchsia-500 hover:bg-fuchsia-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/evennumbers" className="flex justify-center hover:underline">Even Numbers</Link>
        </div>
        <div className='bg-slate-500 hover:bg-slate-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/find-largest-in-nested-array" className="flex justify-center hover:underline">Find LArgest in Nested Array</Link>
        </div>
        <div className='bg-rose-500 hover:bg-rose-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/ascending-sort-array" className="flex justify-center hover:underline">Ascending Sort Array</Link>
        </div>
        <div className='bg-neutral-500 hover:bg-neutral-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/descending-sort-array" className="flex justify-center hover:underline">Descending Sort Array</Link>
        </div>
        <div className='bg-amber-500 hover:bg-amber-700 p-4 text-white rounded-lg shadow-md'>
          <Link to="/character-count" className="flex justify-center hover:underline">Character Count</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
