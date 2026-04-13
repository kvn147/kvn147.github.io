function About() {
  return (
    <div className="relative min-h-[70vh] bg-gray-100 text-black font-ubuntu shadow-xl flex items-center z-10">
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-start gap-6">
          <div className="text-2xl lg:text-4xl font-semibold">About Me</div>
          <div className="text-base lg:text-lg text-left">
            I am a transfer student at the University of Washington - Seattle, pursuing my BS in CSE with a planned graduation of June 2027. <br />
            <br />
            I have a strong interest in Full-Stack development, Embedded Systems, Robotics, and in AI/ML with Computer Vision. This spring quarter, I am on the software team for Husky Robotics, owning the hardware-software integration and testing for the Mars Rover. I am also enjoying learning about the intersection of robotics and AI/ML.
          </div>
          <div className="w-full rounded-xl bg-gray-200/60 px-5 py-4 text-left text-base lg:text-lg text-gray-700">
            <div className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-2">Skills</div>
            <div><span className="font-semibold">Languages:</span> <span className="italic">Python, C/C++, Java, TypeScript/JavaScript, SQL</span></div>
            <div><span className="font-semibold">Full Stack:</span> <span className="italic">React, Node.js, FastAPI, Express, MongoDB, PostgreSQL, EC2/S3</span></div>
            <div><span className="font-semibold">Robotics/Embedded:</span> <span className="italic">ROS, Jetson, CAN Bus, SPI/UART/I2C, FreeRTOS</span></div>
            <div><span className="font-semibold">Engineering Practices:</span> <span className="italic">Agile, Unit & Integration Testing, SIL/HIL Testing, CI/CD, Code Reviews</span></div>
          </div>
        </div>
        <div className="lg:w-2/5 flex items-center justify-center lg:justify-end">
          <div className="flex flex-col items-center">
            <div className="p-2.5 outline outline-2 outline-offset-[-2px] outline-stone-200/60 inline-block">
              <img src="/images/profile.jpg" alt="Kevin Nguyen" className="w-40 h-50 lg:w-60 lg:h-80 object-cover" />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;