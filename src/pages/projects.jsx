import React, { useState } from 'react';
import ProjectCard from '../components/project_card';
import { projects } from '../data/projects';

function Projects() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories from all projects
  const categories = [...new Set(
    projects.flatMap(project =>
      Array.isArray(project.category) ? project.category : [project.category]
    )
  )];

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
  };

  // Filter projects based on selected categories
  const filteredProjects = selectedCategories.length === 0
    ? projects
    : projects.filter(project => {
        const projectCategories = Array.isArray(project.category)
          ? project.category
          : [project.category];
        return projectCategories.some(cat => selectedCategories.includes(cat));
      });

  const orderedProjects = [...filteredProjects].sort((firstProject, secondProject) => firstProject.id - secondProject.id);

  // Get project count for each category
  const getCategoryCount = (category) => {
    return projects.filter(project => {
      const projectCategories = Array.isArray(project.category)
        ? project.category
        : [project.category];
      return projectCategories.includes(category);
    }).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-gray-800 mb-6">
              Current Projects
            </h2>
            <p className="text-xl font-ubuntu text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of projects I've worked on, ranging from web applications to mobile apps and open-source contributions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
    
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
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
    </div>
  );
}

export default Projects;