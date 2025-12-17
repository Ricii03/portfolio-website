import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-all duration-500">
        {/* Animated Gradient Bubbles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Bubble 1 - Blue */}
          <div 
            className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/20 blur-3xl animate-bubble-float"
            style={{
              top: '10%',
              left: '10%',
              animationDelay: '0s',
            }}
          ></div>
          
          {/* Bubble 2 - Purple */}
          <div 
            className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/30 to-purple-600/20 blur-3xl animate-bubble-drift"
            style={{
              top: '30%',
              right: '15%',
              animationDelay: '2s',
            }}
          ></div>
          
          {/* Bubble 3 - Cyan */}
          <div 
            className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400/30 to-cyan-600/20 blur-3xl animate-bubble-float"
            style={{
              bottom: '20%',
              left: '20%',
              animationDelay: '4s',
            }}
          ></div>
          
          {/* Bubble 4 - Pink */}
          <div 
            className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-pink-400/30 to-pink-600/20 blur-3xl animate-bubble-drift"
            style={{
              top: '50%',
              right: '30%',
              animationDelay: '1s',
            }}
          ></div>
          
          {/* Bubble 5 - Indigo */}
          <div 
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-indigo-400/30 to-indigo-600/20 blur-3xl animate-bubble-float"
            style={{
              bottom: '40%',
              right: '10%',
              animationDelay: '3s',
            }}
          ></div>
          
          {/* Bubble 6 - Teal */}
          <div 
            className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/20 blur-3xl animate-bubble-drift"
            style={{
              top: '70%',
              left: '5%',
              animationDelay: '5s',
            }}
          ></div>
          
          {/* Bubble 7 - Violet */}
          <div 
            className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-violet-400/30 to-violet-600/20 blur-3xl animate-bubble-float"
            style={{
              bottom: '10%',
              left: '50%',
              animationDelay: '2.5s',
            }}
          ></div>
          
          {/* Dark Mode Overlay */}
          <div className="absolute inset-0 dark:bg-gray-900/80"></div>
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <WorkExperience />
          <Projects />
          <Certificates />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
