import "../components/background.css"

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="relative z-10">
        <About />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="fixed inset-x-0 top-0 h-screen flex flex-col justify-center items-center text-white font-ubuntu header-background z-0">
      <div className="text-7xl font-semibold relative z-10">Hello, I'm Kevin Nguyen!</div>
      <div className="text-2xl mt-4 relative z-10">I'm a passionate software developer studying CS at the University of Washington.</div>
    </div>
  )
}

function About() {
  return (
    <div className="relative min-h-[95vh] bg-gray-100 text-black font-ubuntu shadow-xl flex items-center z-10">
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-start gap-6">
          <div className="text-4xl font-semibold">About Me</div>
          <div className="text-lg text-left">
            I am a transfer student at the University of Washington, pursuing my undergrad in Computer Science with a planned graduation of December 2026. 
            I have a strong interest in full-stack development, embedded systems, and in new technologies of AI/ML. In my free time, I enjoy working on personal projects like web applications, contributing to open source, and learning about the latest trends in the tech industry.
          </div>
        </div>
        <div className="lg:w-2/5 flex items-center justify-center lg:justify-end">
          <div className="flex flex-col items-center">
            <div className="p-2.5 outline outline-2 outline-offset-[-2px] outline-stone-200/60 inline-block">
              <img src="/images/profile.jpg" alt="Kevin Nguyen" className="w-80 h-100 object-cover" />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center"></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;