export default function Tutorial() {
    const steps = [
      {
        title: 'Generate Array',
        description: 'Click "Generate New Array" to create a random array of elements. Use the size slider to adjust the number of elements.',
      },
      {
        title: 'Choose Algorithm',
        description: 'Select one of the available sorting algorithms: Merge Sort, Quick Sort, Heap Sort, or Bubble Sort.',
      },
      {
        title: 'Adjust Settings',
        description: 'Use the speed slider to control the visualization speed. Faster speeds are great for large datasets, slower for learning.',
      },
      {
        title: 'Start Sorting',
        description: 'Click the algorithm button to begin the sorting process. Watch as the elements rearrange themselves in real-time.',
      },
    ]
  
    return (
      <section id="tutorial" className="bg-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate__animated animate__fadeIn">How to Use the Visualizer</h2>
  
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate__animated animate__fadeInLeft">
              {steps.map((step, index) => (
                <div key={step.title} className="bg-neutral-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{index + 1}</span>
                    <h3 className="text-xl font-semibold text-white ml-4">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
  
            <div className="bg-neutral-700 rounded-lg p-6 animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-semibold text-white mb-6">Color Guide</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="ml-4 text-gray-300">Default unsorted elements</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="ml-4 text-gray-300">Sorted elements</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <span className="ml-4 text-gray-300">Elements being compared</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                  <span className="ml-4 text-gray-300">Elements being swapped</span>
                </div>
              </div>
  
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Pro Tips</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Start with smaller arrays to understand the sorting process</li>
                  <li>Use slower speeds initially to observe the algorithm's behavior</li>
                  <li>Compare different algorithms with same array size</li>
                  <li>Watch for patterns in how each algorithm approaches sorting</li>
                </ul>
              </div>
  
              <div className="mt-8">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  