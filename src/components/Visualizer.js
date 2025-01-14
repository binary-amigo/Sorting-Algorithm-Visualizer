'use client'

import { useState, useEffect } from 'react'
import { getMergeSortAnimations } from "../sortingAlgorithms/sortingAlgorithms";
import { getQuickSortAnimations } from '../sortingAlgorithms/sortingAlgorithms';
import { getBubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms';
import { getInsertionSortAnimations } from '../sortingAlgorithms/sortingAlgorithms';

const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 310;

export default function Visualizer() {
  const [array, setArray] = useState([])
  const [arraySize, setArraySize] = useState(50)
  const [sortingSpeed, setSortingSpeed] = useState(50)

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = Array.from({ length: NUMBER_OF_ARRAY_BARS }, () =>
      randomIntFromInterval(5, 730)
    );
    setArray(newArray);
  };

  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    animations.forEach((animation, i) => {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animation;
        const color = i % 3 === 0 ? "red" : "turquoise";

        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animation;
          arrayBars[barOneIdx].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    });
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");
  
    animations.forEach((animation, i) => {
      const isColorChange = animation[0] === "compare" || animation[0] === "revert";
      if (isColorChange) {
        const [action, barOneIdx, barTwoIdx] = animation;
        const color = action === "compare" ? "red" : "turquoise";
  
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // Swap or update height
        setTimeout(() => {
          const [action, barOneIdx, barTwoIdxOrHeight] = animation;
          if (action === "swap") {
            const tempHeight = arrayBars[barOneIdx].style.height;
            arrayBars[barOneIdx].style.height = arrayBars[barTwoIdxOrHeight].style.height;
            arrayBars[barTwoIdxOrHeight].style.height = tempHeight;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    });
  };
  
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    animations.forEach((animation, i) => {
        const isColorChange = animation[0] === "compare" || animation[0] === "revert";
        
        if (isColorChange) {
            const [action, barOneIdx, barTwoIdx] = animation;
            const color = action === "compare" ? "red" : "turquoise";

            setTimeout(() => {
                arrayBars[barOneIdx].style.backgroundColor = color;
                arrayBars[barTwoIdx].style.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            // Swap or update height
            setTimeout(() => {
                const [action, barOneIdx, barTwoIdxOrHeight] = animation;
                if (action === "swap") {
                    const tempHeight = arrayBars[barOneIdx].style.height;
                    arrayBars[barOneIdx].style.height = arrayBars[barTwoIdxOrHeight].style.height;
                    arrayBars[barTwoIdxOrHeight].style.height = tempHeight;
                }
            }, i * ANIMATION_SPEED_MS);
        }
    });
};
  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    animations.forEach((animation, i) => {
        const isColorChange = animation[0] === "compare" || animation[0] === "revert";

        if (isColorChange) {
            const [action, barOneIdx, barTwoIdx] = animation;
            const color = action === "compare" ? "red" : "turquoise";

            setTimeout(() => {
                arrayBars[barOneIdx].style.backgroundColor = color;
                arrayBars[barTwoIdx].style.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            // Swap or update height
            setTimeout(() => {
                const [action, barOneIdx, barTwoIdxOrHeight] = animation;
                if (action === "swap") {
                    const tempHeight = arrayBars[barOneIdx].style.height;
                    arrayBars[barOneIdx].style.height = arrayBars[barTwoIdxOrHeight].style.height;
                    arrayBars[barTwoIdxOrHeight].style.height = tempHeight;
                }
            }, i * ANIMATION_SPEED_MS);
        }
    });
};

  useEffect(() => {
    generateArray(arraySize)
  }, [arraySize])

  const generateArray = (size) => {
    const newArray = []
    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 10)
    }
    setArray(newArray)
  }

  return (
    <section id="visualizer" className="bg-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="array-container h-[400px] bg-neutral-900 rounded-lg p-4 mb-8 flex items-end justify-center gap-1 animate__animated animate__fadeIn">
          <div id="bars-container" className="flex items-end justify-center gap-1 w-full h-full">
            {array.map((value, index) => (
              <div
                key={index}
                className="array-bar bg-blue-500"
                style={{
                  height: `${value}px`,
                  width: `${Math.max(2, 90/arraySize)}%`,
                  transition: 'height 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="controls-panel bg-neutral-900 p-6 rounded-lg animate__animated animate__fadeInUp">
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => generateArray(arraySize)} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              Generate New Array
            </button>
            <button onClick={mergeSort} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              Merge Sort
            </button>
            <button onClick={quickSort} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              Quick Sort
            </button>
            <button onClick={insertionSort} className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              Insertion Sort
            </button>
            <button onClick={bubbleSort} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              Bubble Sort
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <label className="text-white">Array Size:</label>
              <input
                type="range"
                min="10"
                max="100"
                value={arraySize}
                onChange={(e) => setArraySize(Number(e.target.value))}
                className="w-32"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white">Speed:</label>
              <input
                type="range"
                min="1"
                max="100"
                value={sortingSpeed}
                onChange={(e) => setSortingSpeed(Number(e.target.value))}
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

