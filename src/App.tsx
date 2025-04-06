import React from 'react';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: "E-commerce Platformsss",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Weather App",
    description: "Real-time weather application with beautiful visualizations",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Weather API", "Charts"]
  },
  {
    title: "Task Manager",
    description: "Minimalist task management application with iOS-like design",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "TypeScript", "Firebase"]
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Navbar */}
      <nav className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/60'} backdrop-blur-xl fixed w-full z-50 border-b ${darkMode ? 'border-gray-700/20' : 'border-white/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="font-mono text-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#projects" className={`font-mono ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>
                Proyectos
              </a>
              <a href="#contact" className={`font-mono ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>
                Contacto
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-100 text-gray-600'} hover:scale-110 transition-all duration-300`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-100 text-gray-600'} hover:scale-110 transition-all duration-300`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-xl`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#projects"
                className={`font-mono block px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800/40' : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'} transition-all duration-300`}
              >
                Projectos
              </a>
              <a
                href="#contact"
                className={`font-mono block px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800/40' : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'} transition-all duration-300`}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-mono text-2xl font-bold sm:text-5xl md:text-5xl typewriter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient">
              Soy Alejandro Toral
            </span>
          </h1>
          <p className={`font-mono mt-6 max-w-md mx-auto text-base sm:text-lg md:mt-8 md:text-xl md:max-w-3xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/30 text-gray-300' : 'bg-white/30 text-gray-500'} rounded-2xl p-6 shadow-lg`}>
            Desarrollador apasionado por la tecnologia
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className={`py-16 ${darkMode ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-mono text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1`}
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`font-mono text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`font-mono ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`font-mono px-3 py-1 ${darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-white/50 text-gray-600'} backdrop-blur-sm rounded-full text-sm border ${darkMode ? 'border-gray-600' : 'border-gray-100'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button className={`font-mono w-full ${darkMode ? 'bg-gray-800/80 text-white hover:bg-gray-700/90' : 'bg-white/80 text-gray-900 hover:bg-white/90'} backdrop-blur-sm py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105`}>
                      Ver Proyecto
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className={`py-16 bg-gradient-to-b ${darkMode ? 'from-gray-800/40 to-gray-800/60' : 'from-white/40 to-white/60'} backdrop-blur-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-mono text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Contactame
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 ${darkMode ? 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/80' : 'bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/80'} backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 ${darkMode ? 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/80' : 'bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/80'} backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className={`p-4 ${darkMode ? 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/80' : 'bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/80'} backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;