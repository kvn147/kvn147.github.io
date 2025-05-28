import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Project Image */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <span className="text-white text-2xl font-ubuntu font-bold">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block mb-3">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-ubuntu font-medium rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-ubuntu font-bold text-gray-800 mb-3 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-ubuntu text-base leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-ubuntu rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-ubuntu rounded">
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
              className="flex-1 px-4 py-2 bg-gray-800 text-white text-center font-ubuntu font-medium rounded transition-colors duration-200 hover:bg-gray-700"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-green-500 text-white text-center font-ubuntu font-medium rounded transition-colors duration-200 hover:bg-green-600"
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