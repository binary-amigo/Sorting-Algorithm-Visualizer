'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { href: "#visualizer", label: "Visualizer" },
    // { href: "#algorithmControls", label: "Controls" },
    { href: "#algorithmInfo", label: "Algorithm Info" },
    { href: "#features", label: "Features" },
    { href: "#tutorial", label: "Tutorial" },
    // { href: "#performance", label: "Performance" },
  ]

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">AlgoViz</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

