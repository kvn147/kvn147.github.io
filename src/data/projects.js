export const projects = [
  {
    id: 1,
    title: "Valorant at UW Website",
    description: "Website built for Valorant club at the University of Washington.",
    longDescription: "Built with React and Node.js, this website provides essential information about the club as well to go along with its clean design.",
    technologies: ["Javascript", "React", "Node.js", "Vercel"],
    githubUrl: "https://github.com/webimpactuw/valorant-uw",
    liveUrl: "https://webimpactuw.github.io/valorant-uw/", // Live URL for the website
    imageUrl: "/images/valo.png", // Add images to public/images/
    featured: true,
    category: ["Frontend", "Web App"]
  },
  {
    id: 2,
    title: "Husky Robotics - Software",
    description: "Building Mars Rover, updated CAN protocol, and implemented integration testing for hardware components.",
    longDescription: "",
    technologies: ["C++", "Jetson", "HITL", "HW/SW Integration"],
    githubUrl: "https://github.com/huskyroboticsteam/resurgence",
    liveUrl: null,
    imageUrl: "/images/rover.jpg",
    featured: true,
    category: ["Robotics", "Embedded Systems"]
  },
  {
    id: 3,
    title: "Computer Vision-Based Mechanical Hand Gesture Recognition",
    description: "3D printed mechanical hand controlled by servos with computer vision-based gesture recognition for intuitive control.",
    longDescription: "",
    technologies: ["Python", "PyTorch", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/huskyroboticsteam/resurgence",
    liveUrl: null,
    imageUrl: "/images/hand.png",
    featured: true,
    category: ["Robotics", "Embedded Systems", "AI/ML", "Computer Vision"]
  },
  {
    id: 4,
    title: "SpeakEasy AI Speaking Assistant",
    description: "AI-powered speaking assistant to help improve public speaking skills.",
    longDescription: "An AI-powered speaking assistant that provides real-time feedback on speech delivery, including pace, filler words, and clarity. Built with TypeScript and integrates AWS Rekognition and Transcribe to read and analyze user emotions, tone, and dialogue. Uses AWS Bedrock to leverage OpenAI's GPT-4 model for generating personalized response suggestions and Gemini API for generating conversation summaries and feedback.",
    technologies: ["Computer Vision", "TypeScript", "EC2", "S3","Firebase Auth", "Rekognition", "Transcribe", "Gemini API"],
    githubUrl: "https://github.com/kvn147/speak-easy-copy",
    liveUrl: null,
    imageUrl: "/images/speakeasy.png",
    featured: false,
    category: ["AI", "Cloud", "Fullstack"]
  },
  {
    id: 6,
    title: "333gle Search Engine",
    description: "High-Performance Document Search Engine.",
    longDescription: "A high-performance search engine built with C/C++ backend using data structures to query.",
    technologies: ["C/C++", "POSIX", "HTML/CSS", "Network Programming"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: "/images/333gle.png",
    featured: true,
    category: ["Systems", "Backend"]
  },
  {
    id: 6,
    title: "UW Course Scraper",
    description: "An open-source course scraper providing essential information about courses for students at UW.",
    longDescription: "A lightweight, dependency-free library that makes it easy to create beautiful, interactive charts. Supports multiple chart types, real-time data updates, and extensive customization options.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "DawgPath API"],
    githubUrl: "https://github.com/swecc-uw/swecc-course-scraper",
    liveUrl: null,
    featured: true,
    category: ["Open Source"]
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    longDescription: "A personal portfolio website built with React+Vite frontend and Vercel backend, showcasing my projects, skills, and experiences.",
    technologies: ["Vercel", "Javascript", "Express", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/kvn147/kvn147.github.io",
    liveUrl: null,
    featured: false,
    category: ["Fullstack", "Web App"]
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

// Helper to get all unique categories
export const getAllCategories = () => {
  const categories = new Set();
  projects.forEach(project => {
    if (Array.isArray(project.category)) {
      project.category.forEach(cat => categories.add(cat));
    } else {
      categories.add(project.category);
    }
  });
  return Array.from(categories);
};