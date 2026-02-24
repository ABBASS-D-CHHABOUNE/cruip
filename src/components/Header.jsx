import { useState } from "react"
import { Link } from "react-router-dom"
import LogoWhite from "../assets/img/Logo_white.png"
import { ArrowRight } from "lucide-react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className=" text-white  w-full p-2   md:pr-8 md:pl-8">

      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center">

  {/* Left side */}
  <div className="flex items-center gap-8">

    {/* Logo */}
    <Link to="/" className="text-xl font-bold">
      <img src={LogoWhite} alt="Cruip" width={40} />
    </Link>

    {/* Links */}
    <nav className="hidden md:flex gap-6">

      <Link to="/">Home</Link>

      <Link to="/pricing">Pricing</Link>

      <Link to="/about">About</Link>

      <Link to="/Blog">Blog</Link>

    </nav>

  </div>


  {/* Right side */}
  <div className="hidden md:flex gap-4 ml-auto">

    <button className="bg-white text-black px-4 py-2 rounded">
      Contact Us
    </button>

    <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
      See More
      <ArrowRight className="w-5 h-5" />
    </button>


  </div>


  {/* Mobile Button */}
  <button
    className="md:hidden text-2xl ml-auto"
    onClick={() => setIsOpen(true)}
  >
    ☰
  </button>

</div>


      {/* Mobile Menu */}
      <div
         className={`fixed top-0 right-0 h-full w-64 bg-black
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >

        {/* Close Button */}
        <button
          className="text-white text-2xl p-4"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>


        <nav className="flex flex-col gap-6 p-6">

          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

          <Link to="/Pricing" onClick={() => setIsOpen(false)}>Pricing</Link>

          <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>

        </nav>

      </div>

    </header>
  )
}