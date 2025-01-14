
export default function Hero() {
  return (
    <section id="hero" className="bg-neutral-900 text-white pt-20 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn">
            Sorting Algorithm
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Visualizer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
            Watch sorting algorithms come to life through interactive visualizations. Understanding algorithms has never been more intuitive and engaging.
          </p>
          <div className="flex justify-center gap-4 animate__animated animate__fadeIn animate__delay-2s">
            <a href="#visualizer" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300">
              Start Visualizing
            </a>
            <a href="#tutorial" className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg font-semibold transition-colors duration-300">
              Learn More
            </a>
          </div>
          <div className="mt-16 text-center animate__animated animate__fadeIn animate__delay-3s">
            <p className="text-gray-400 mb-4">Supported Algorithms</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-neutral-800 rounded-full">Merge Sort</span>
              <span className="px-4 py-2 bg-neutral-800 rounded-full">Quick Sort</span>
              <span className="px-4 py-2 bg-neutral-800 rounded-full">Insertion Sort</span>
              <span className="px-4 py-2 bg-neutral-800 rounded-full">Bubble Sort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

