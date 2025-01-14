// 'use client'

// import { useEffect, useRef } from 'react'
// import Chart from 'chart.js/auto'

// export default function Performance() {
//   const chartRef = useRef<HTMLCanvasElement>(null)
//   const chartInstanceRef = useRef<Chart | null>(null)

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d')
//       if (ctx) {
//         // Destroy existing chart instance if it exists
//         if (chartInstanceRef.current) {
//           chartInstanceRef.current.destroy()
//         }

//         // Create a new chart instance
//         chartInstanceRef.current = new Chart(ctx, {
//           type: 'line',
//           data: {
//             labels: ['10', '100', '1000', '10000'],
//             datasets: [{
//               label: 'Merge Sort',
//               data: [20, 40, 60, 80],
//               borderColor: 'rgb(59, 130, 246)',
//               tension: 0.1
//             }, {
//               label: 'Quick Sort',
//               data: [15, 35, 55, 75],
//               borderColor: 'rgb(34, 197, 94)',
//               tension: 0.1
//             }, {
//               label: 'Heap Sort',
//               data: [25, 45, 65, 85],
//               borderColor: 'rgb(234, 179, 8)',
//               tension: 0.1
//             }, {
//               label: 'Bubble Sort',
//               data: [30, 60, 90, 120],
//               borderColor: 'rgb(239, 68, 68)',
//               tension: 0.1
//             }]
//           },
//           options: {
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'bottom',
//                 labels: {
//                   color: 'white'
//                 }
//               }
//             },
//             scales: {
//               y: {
//                 ticks: {
//                   color: 'white'
//                 },
//                 grid: {
//                   color: 'rgba(255, 255, 255, 0.1)'
//                 }
//               },
//               x: {
//                 ticks: {
//                   color: 'white'
//                 },
//                 grid: {
//                   color: 'rgba(255, 255, 255, 0.1)'
//                 }
//               }
//             }
//           }
//         })
//       }
//     }

//     return () => {
//       // Cleanup on component unmount
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy()
//       }
//     }
//   }, [])


//   return (
//     <section id="performance" className="bg-neutral-900 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-white mb-12 text-center">
//           Performance Analysis
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-8">
//           <div className="bg-neutral-800 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-6">
//               Time Complexity Comparison
//             </h3>
//             <div className="relative">
//               <canvas ref={chartRef} width="400" height="300"></canvas>
//             </div>
//           </div>

//           <div className="bg-neutral-800 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-6">
//               Space Complexity
//             </h3>
//             <div className="space-y-4">
//               {[
//                 { label: 'Merge Sort', value: 'O(n)', color: 'text-blue-400' },
//                 { label: 'Quick Sort', value: 'O(log n)', color: 'text-green-400' },
//                 { label: 'Heap Sort', value: 'O(1)', color: 'text-yellow-400' },
//                 { label: 'Bubble Sort', value: 'O(1)', color: 'text-red-400' },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg"
//                 >
//                   <span className="text-white">{item.label}</span>
//                   <span className={item.color}>{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-neutral-800 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-6">
//               Real-time Performance Metrics
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { label: 'Execution Time', value: '0.00s' },
//                 { label: 'Comparisons', value: '0' },
//                 { label: 'Array Accesses', value: '0' },
//                 { label: 'Memory Usage', value: '0 MB' },
//               ].map((metric, index) => (
//                 <div key={index} className="bg-neutral-700 p-4 rounded-lg">
//                   <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
//                   <div className="text-2xl text-white font-bold">{metric.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-neutral-800 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-6">
//               Algorithm Efficiency
//             </h3>
//             <div className="space-y-4">
//               {[
//                 { label: 'Merge Sort', efficiency: '95%', color: 'bg-blue-600' },
//                 { label: 'Quick Sort', efficiency: '90%', color: 'bg-green-600' },
//                 { label: 'Heap Sort', efficiency: '85%', color: 'bg-yellow-600' },
//                 { label: 'Bubble Sort', efficiency: '45%', color: 'bg-red-600' },
//               ].map((algorithm, index) => (
//                 <div key={index} className="space-y-2">
//                   <div className="flex justify-between text-sm text-gray-400">
//                     <span>{algorithm.label}</span>
//                     <span>{algorithm.efficiency}</span>
//                   </div>
//                   <div className="w-full bg-neutral-700 rounded-full h-2.5">
//                     <div
//                       className={`${algorithm.color} h-2.5 rounded-full`}
//                       style={{ width: algorithm.efficiency }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // export default Performance;
