'use client'

import { useState } from 'react'

export default function AlgorithmControls() {
  const [arraySize, setArraySize] = useState(50)
  const [minValue, setMinValue] = useState(5)
  const [maxValue, setMaxValue] = useState(500)
  const [speed, setSpeed] = useState(50)
  const [colorTheme, setColorTheme] = useState('default')
  const [soundEnabled, setSoundEnabled] = useState(false)

  const saveSettings = () => {
    // Add animation class
    const button = document.getElementById('saveSettings')
    if (button) {
      button.classList.add('animate__animated', 'animate__pulse')
      setTimeout(() => {
        button.classList.remove('animate__animated', 'animate__pulse')
      }, 1000)
    }
    // Implement save logic here
  }

  const resetDefaults = () => {
    setArraySize(50)
    setMinValue(5)
    setMaxValue(500)
    setSpeed(50)
    setColorTheme('default')
    setSoundEnabled(false)
  }

  return (
    <section id="algorithmControls" className="bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-800 rounded-lg p-8 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Algorithm Controls & Settings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">Array Settings</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Array Size (10-100)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="arraySizeControl"
                      min="10"
                      max="100"
                      value={arraySize}
                      onChange={(e) => setArraySize(Number(e.target.value))}
                      className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                    />
                    <span id="arraySizeValue" className="text-white min-w-[3rem]">{arraySize}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Min Value</label>
                  <input
                    type="number"
                    value={minValue}
                    onChange={(e) => setMinValue(Number(e.target.value))}
                    min="1"
                    max="100"
                    className="bg-neutral-600 text-white p-2 rounded-lg"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Max Value</label>
                  <input
                    type="number"
                    value={maxValue}
                    onChange={(e) => setMaxValue(Number(e.target.value))}
                    min="100"
                    max="1000"
                    className="bg-neutral-600 text-white p-2 rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">Visualization Settings</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Animation Speed</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="speedControl"
                      min="1"
                      max="100"
                      value={speed}
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="w-full h-2 bg-green-500 rounded-lg appearance-none cursor-pointer"
                    />
                    <span id="speedValue" className="text-white min-w-[3rem]">{speed}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Color Theme</label>
                  <select
                    value={colorTheme}
                    onChange={(e) => setColorTheme(e.target.value)}
                    className="bg-neutral-600 text-white p-2 rounded-lg"
                  >
                    <option value="default">Default</option>
                    <option value="rainbow">Rainbow</option>
                    <option value="monochrome">Monochrome</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="soundEnabled"
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label className="text-gray-300">Enable Sound Effects</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <button
              id="saveSettings"
              onClick={saveSettings}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
            >
              Save Settings
            </button>
            <button
              onClick={resetDefaults}
              className="px-6 py-3 bg-neutral-600 hover:bg-neutral-500 text-white rounded-lg transition-all duration-300"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

