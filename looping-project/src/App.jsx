import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrimeNumber from './components/PrimeNumber';
import ArmstrongNumber from './components/ArmstrongNumber';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import FibonacciSeries from './components/FibonacciSeries';
import Factorial from './components/Factorial';
import Palindrome from './components/Palindrome';
import LongestWord from './components/LongestWord';
import RemoveDuplicates from './components/RemoveDuplicates';
import ReverseString from './components/ReverseString';
import MaxConsecutiveOnes from './components/MaximumConsecutiveOnes';
import About from './components/About';
import CheckAnagram from './components/CheckAnagram';
import FindMaxNumber from './components/FindMaxNumber';
import MergeAndSortArrays from './components/MergeAndSortArrays';
import EvenNumbers from './components/EvenNumbers';
import FindLargestInNestedArray from './components/FindLargestInNestedArray';
import CharacterCount from './components/CharacterCount';
import AscendingSortArray from './components/AscendingSortArray';
import DescendingSortArray from './components/DescendingSortArray';

const App = () => {
  return (
    <>
    <Navbar/> 
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prime" element={<PrimeNumber />} />
        <Route path="/armstrong" element={<ArmstrongNumber />} />
        <Route path='/fibonacci' element={<FibonacciSeries/>}/>
        <Route path="/factorial" element={<Factorial/>} />
        <Route path="/palindrome" element={<Palindrome/>} />
        <Route path="/longest-word" element={<LongestWord/>} />
        <Route path="/remove-duplicates" element={<RemoveDuplicates/>} />
        <Route path="/reverse-string" element={<ReverseString/>} />
        <Route path="/max-consecutive-ones" element={<MaxConsecutiveOnes/>} />
        <Route path="/check-anagram" element={<CheckAnagram/>} />
        <Route path="/mergeandsortarrays" element={<MergeAndSortArrays/>} />
        <Route path="/evennumbers" element={<EvenNumbers/>} />
        <Route path="/find-largest-in-nested-array" element={<FindLargestInNestedArray/>} />
        <Route path="/character-count" element={<CharacterCount/>} />
        <Route path="/ascending-sort-array" element={<AscendingSortArray/>} />
        <Route path="/descending-sort-array" element={<DescendingSortArray/>} />


        <Route path ="/About" element={<About/>} />






      </Routes>
    </Router>
    </>

  );
};

export default App;
