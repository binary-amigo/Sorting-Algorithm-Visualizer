export default function AlgorithmInfo() {
    const algorithms = [
      {
        name: 'Merge Sort',
        description: 'A divide-and-conquer algorithm that recursively breaks down a problem into smaller, more manageable subproblems until they become simple enough to solve directly.',
        timeComplexity: {
          best: 'O(n log n)',
          average: 'O(n log n)',
          worst: 'O(n log n)',
        },
        spaceComplexity: 'O(n)',
        color: 'blue',
      },
      {
        name: 'Quick Sort',
        description: 'Uses a divide-and-conquer strategy to sort the array. It works by selecting a \'pivot\' element and partitioning the array around it.',
        timeComplexity: {
          best: 'O(n log n)',
          average: 'O(n log n)',
          worst: 'O(n²)',
        },
        spaceComplexity: 'O(log n)',
        color: 'green',
      },
      {
        name: 'Insertion Sort',
        description: 'A simple comparison-based sorting algorithm that builds the final sorted array one element at a time by repeatedly picking the next element and placing it in its correct position in the sorted portion of the array.',
        timeComplexity: {
          best: 'O(n)',
          average: 'O(n²)',
          worst: 'O(n²)',
        },
        spaceComplexity: 'O(1)',
        color: 'yellow',
      },
      {
        name: 'Bubble Sort',
        description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
        timeComplexity: {
          best: 'O(n)',
          average: 'O(n²)',
          worst: 'O(n²)',
        },
        spaceComplexity: 'O(1)',
        color: 'red',
      },
    ]
  
    return (
      <section id="algorithmInfo" className="bg-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate__animated animate__fadeIn">Understanding Sorting Algorithms</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {algorithms.map((algo, index) => (
              <div key={algo.name} className={`bg-neutral-700 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-${index}s`}>
                <h3 className={`text-xl font-semibold text-${algo.color}-400 mb-4`}>{algo.name}</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">{algo.description}</p>
                  <div className="text-gray-200">
                    <p className="font-semibold text-white">Time Complexity:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Best: {algo.timeComplexity.best}</li>
                      <li>Average: {algo.timeComplexity.average}</li>
                      <li>Worst: {algo.timeComplexity.worst}</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-400">Space Complexity: {algo.spaceComplexity}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 animate__animated animate__fadeIn animate__delay-4s">
              Compare All Algorithms
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  