
function Home() {
  return (
    <div className="home">
      <Header />
      <About />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-black font-ubuntu">
      <div className="text-7xl font-semibold">Hello, I'm Kevin Nguyen!</div>
      <div className="text-2xl mt-4">I'm a passionate software developer studying CS at the University of Washington.</div>
    </div>
  )
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 text-black font-ubuntu">
      <div className="text-4xl font-semibold mb-4">About Me</div>
      <div className="max-w-2xl text-lg text-center">
        I am a transfer student at the University of Washington, pursuing my undergrad in Computer Science. I have a strong interest in software development, particularly in building web applications and exploring new technologies. In my free time, I enjoy working on personal projects, contributing to open source, and learning about the latest trends in the tech industry.
      </div>
    </div>
  )
}
export default Home;