import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project, isDarkMode }) {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? 'bg-[#142652]' : 'bg-white'}`}>
      {/* Project Image */}
      <div className={`h-48 overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'}`}>
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#ee7752] to-[#e73c7e] flex items-center justify-center">
            <span className="text-white text-2xl font-ubuntu font-bold">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#23d5ab]/20 text-[#23a6d5] text-sm font-ubuntu font-medium rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-ubuntu font-bold mb-3 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`font-ubuntu text-base leading-relaxed mb-4 line-clamp-3 ${isDarkMode ? 'text-slate-200' : 'text-gray-600'}`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className={`px-2 py-1 text-sm font-ubuntu rounded ${isDarkMode ? 'bg-slate-700 text-slate-100' : 'bg-gray-100 text-gray-700'}`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className={`px-2 py-1 text-sm font-ubuntu rounded ${isDarkMode ? 'bg-slate-700 text-slate-100' : 'bg-gray-100 text-gray-700'}`}>
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-2 text-white text-center font-ubuntu font-medium rounded transition-colors duration-200 ${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-[#23a6d5] text-white text-center font-ubuntu font-medium rounded transition-colors duration-200 hover:bg-[#23a6d5]/80"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;