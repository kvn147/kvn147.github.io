function About({ isDarkMode }) {
  return (
    <div className={`relative min-h-[70vh] font-ubuntu shadow-xl flex items-center z-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#0f1b3d] text-white' : 'bg-gray-100 text-black'}`}>
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-start gap-6">
          <div className="text-2xl lg:text-4xl font-semibold">About Me</div>
          <div className={`text-base lg:text-lg text-left ${isDarkMode ? 'text-slate-100' : ''}`}>
            I am a transfer student at the University of Washington - Seattle, pursuing my BS in CSE with a planned graduation of June 2027. <br />
            <br />
            I have a strong interest in Full-Stack development, Embedded Systems, Robotics, and in AI/ML with Computer Vision.
          </div>
          <div className={`w-full rounded-xl px-5 py-4 text-left text-base lg:text-lg ${isDarkMode ? 'bg-[#142652] text-slate-100' : 'bg-gray-200/60 text-gray-700'}`}>
            <div className={`text-sm uppercase tracking-wide font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>Skills</div>
            <div><span className="font-semibold">Languages:</span> <span className="italic">Python, C/C++, Java, TypeScript/JavaScript, SQL</span></div>
            <div><span className="font-semibold">Full Stack:</span> <span className="italic">React, Node.js, FastAPI, Express, Redis, MongoDB, PostgreSQL, EC2/S3</span></div>
            <div><span className="font-semibold">Robotics/Embedded:</span> <span className="italic">ROS, Jetson, CAN Bus, SPI/UART/I2C, FreeRTOS</span></div>
            <div><span className="font-semibold">Practices:</span> <span className="italic">Agile, Unit & Integration Testing, SIL/HIL, CI/CD, Code Reviews</span></div>
          </div>
          <div className={`w-full rounded-xl px-5 py-4 text-left ${isDarkMode ? 'bg-[#142652] text-slate-100' : 'bg-gray-200/60 text-gray-700'}`}>
            <div className={`text-sm uppercase tracking-wide font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>Experience</div>
            <div className="relative pl-5 space-y-4">
              <div className={`absolute left-1.5 top-1 bottom-1 w-0.5 ${isDarkMode ? 'bg-slate-500/70' : 'bg-gray-400/70'}`}></div>

              <div className="relative">
                <span className={`absolute -left-[1.15rem] top-1.5 w-2.5 h-2.5 rounded-full ${isDarkMode ? 'bg-slate-200' : 'bg-gray-700'}`}></span>
                <div className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>Summer 2026</div>
                <div className="text-sm lg:text-base font-medium">Software Engineering Intern — Rivian & Volkwagen Group Technologies</div>
              </div>

              <div className="relative">
                <span className={`absolute -left-[1.15rem] top-1.5 w-2.5 h-2.5 rounded-full ${isDarkMode ? 'bg-slate-200' : 'bg-gray-700'}`}></span>
                <div className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>Fall 2025</div>
                <div className="text-sm lg:text-base font-medium">Software Team — Husky Robotics (Mars Rover)</div>
              </div>

              <div className="relative">
                <span className={`absolute -left-[1.15rem] top-1.5 w-2.5 h-2.5 rounded-full ${isDarkMode ? 'bg-slate-200' : 'bg-gray-700'}`}></span>
                <div className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>2024–Present</div>
                <div className="text-sm lg:text-base font-medium">University of Washington — B.S. in Computer Science/Engineering</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 flex items-center justify-center lg:justify-end">
          <div className="flex flex-col items-center">
            <div className={`p-2.5 outline outline-2 outline-offset-[-2px] inline-block ${isDarkMode ? 'outline-slate-200/40' : 'outline-stone-200/60'}`}>
              <img src="/images/profile.jpg" alt="Kevin Nguyen" className="w-40 h-50 lg:w-60 lg:h-80 object-cover" />
            </div>
            <p className={`text-sm mt-2 text-center ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;