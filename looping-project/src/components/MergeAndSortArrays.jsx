import React, { useState } from 'react';

const MergeSortedArrays = () => {
  const [array1, setArray1] = useState('');
  const [array2, setArray2] = useState('');
  const [mergedArray, setMergedArray] = useState(null);

  const handleMergeArrays = () => {
    if (!array1.trim() || !array2.trim()) {
      setMergedArray('Please enter valid arrays.');
      return;
    }

    const arr1 = array1.split(',').map(item => parseInt(item.trim(), 10));
    const arr2 = array2.split(',').map(item => parseInt(item.trim(), 10));

    if (arr1.some(isNaN) || arr2.some(isNaN)) {
      setMergedArray('Please enter only numbers.');
      return;
    }

    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    setMergedArray(merged);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-cyan-800 mb-4">Merge and Sort Arrays</h1>
        <input
          type="text"
          value={array1}
          onChange={(e) => setArray1(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-cyan-500"
          placeholder="Enter first array (e.g., 0,3,4,31)"
        />
        <input
          type="text"
          value={array2}
          onChange={(e) => setArray2(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-cyan-500"
          placeholder="Enter second array (e.g., 4,6,30)"
        />
        <button
          onClick={handleMergeArrays}
          className="w-full bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
        >
          Merge and Sort
        </button>
        {mergedArray && (
          <div className={`mt-4 text-center text-lg font-semibold ${typeof mergedArray === 'string' ? 'text-red-600' : 'text-cyan-600'}`}>
            {typeof mergedArray === 'string' ? mergedArray : `Merged Array: [${mergedArray.join(', ')}]`}
          </div>
        )}
      </div>
    </div>
  );
};

export default MergeSortedArrays;
