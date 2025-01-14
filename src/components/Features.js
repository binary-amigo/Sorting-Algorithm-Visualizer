import { CloudLightningIcon as Lightning, Sliders, BarChartIcon as ChartBar, List, Eye, Play } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Lightning className="w-6 h-6 text-white" />,
      title: 'Real-time Visualization',
      description: 'Watch sorting algorithms in action with smooth animations and color-coded states.',
      color: 'blue',
    },
    {
      icon: <Sliders className="w-6 h-6 text-white" />,
      title: 'Customizable Input',
      description: 'Adjust array size and speed to understand how algorithms perform under different conditions.',
      color: 'purple',
    },
    {
      icon: <ChartBar className="w-6 h-6 text-white" />,
      title: 'Performance Metrics',
      description: 'Track sorting time and comparisons in real-time for algorithm comparison.',
      color: 'green',
    },
    {
      icon: <List className="w-6 h-6 text-white" />,
      title: 'Multiple Algorithms',
      description: 'Choose from various sorting algorithms including Merge, Quick, Heap, and Bubble Sort.',
      color: 'red',
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: 'Step-by-Step View',
      description: 'Understand each step of the sorting process with detailed visual feedback.',
      color: 'yellow',
    },
    {
      icon: <Play className="w-6 h-6 text-white" />,
      title: 'Interactive Controls',
      description: 'Pause, resume, and reset the visualization at any point during the sorting process.',
      color: 'indigo',
    },
  ]

  return (
    <section id="features" className="bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center animate__animated animate__fadeIn">Key Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className={`bg-neutral-800 rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-${index}s`}>
              <div className={`w-12 h-12 bg-${feature.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

