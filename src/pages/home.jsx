import "../components/background.css"

function Home() {
  return (
    <div className="home min-h-screen">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="relative inset-x-0 top-0 h-screen flex flex-col justify-center items-center text-white font-ubuntu header-background z-0 px-5">
      <div className="text-7xl font-semibold relative z-10">Hello, I'm Kevin Nguyen!</div>
      <div className="text-2xl mt-4 relative z-10">I'm a passionate software developer studying CS at the University of Washington.</div>
    </div>
  )
}
export default Home;