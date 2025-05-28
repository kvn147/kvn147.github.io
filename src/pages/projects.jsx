import React, { useState } from 'react';
import ProjectCard from '../components/project_card';
import { projects } from '../data/projects';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b-2 border-black/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-gray-800 mb-6">
              My Projects
            </h1>
            <p className="text-xl font-ubuntu text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of projects I've worked on, ranging from web applications to mobile apps and open-source contributions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-ubuntu font-medium rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📁</div>
            <h3 className="text-xl font-ubuntu font-semibold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 font-ubuntu">
              No projects match the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-white border-t-2 border-black/20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-ubuntu font-bold text-gray-800 mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg font-ubuntu text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contacts"
            className="inline-block px-8 py-3 bg-green-500 text-white font-ubuntu font-semibold rounded-lg transition-colors duration-200 hover:bg-green-600"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;