
export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AlgoViz</h3>
            <p className="text-gray-400 text-sm">Interactive sorting algorithm visualization tool for learning and understanding data structures.</p>
            <div className="flex space-x-4">
              <a href="" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </a>
              <a href="" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="visualizer" className="hover:text-white transition-colors">Visualizer</a></li>
              <li><a href="algorithmControls" className="hover:text-white transition-colors">Controls</a></li>
              <li><a href="algorithmInfo" className="hover:text-white transition-colors">Algorithm Info</a></li>
              <li><a href="tutorial" className="hover:text-white transition-colors">Tutorial</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="" className="hover:text-white transition-colors">Contributing</a></li>
              <li><a href="" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for updates and new features</p>
            <form className="space-y-2">
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-gray-400 text-sm">
          <p>© 2024 AlgoViz. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

