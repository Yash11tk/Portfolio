const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between px-10 py-4 bg-black">
      <h1 className="text-xl font-bold">Yash</h1>
      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
export default Navbar