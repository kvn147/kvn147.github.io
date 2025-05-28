export const projects = [
  {
    id: 1,
    title: "Valorant at UW Website",
    description: "Website built for Valorant club at the University of Washington.",
    longDescription: "Built with React and Node.js, this website provides essential information about the club as well to go along with its clean design.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/webimpactuw/valorant-uw",
    liveUrl: "https://webimpactuw.github.io/valorant-uw/", // Live URL for the website
    imageUrl: "/images/valo.png", // Add images to public/images/
    featured: true,
    category: "Web Development"
  },
  {
    id: 2,
    title: "University of Washington Course Scraper",
    description: "An open-source course scraper providing essential information about courses for students at UW.",
    longDescription: "A lightweight, dependency-free library that makes it easy to create beautiful, interactive charts. Supports multiple chart types, real-time data updates, and extensive customization options.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "DawgPath API"],
    githubUrl: "https://github.com/swecc-uw/swecc-course-scraper",
    liveUrl: null,
    imageUrl: "/images/project3.jpg",
    featured: true,
    category: "Open Source"
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};