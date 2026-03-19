import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaGraduationCap
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-[#020c1b] fixed flex flex-col justify-between p-6 border-r border-[#112240]">
      
      {/* Top Section */}
      <div>
        <h1 className="text-white text-2xl font-bold mb-10">
          Portfolio
        </h1>

        <ul className="space-y-6">

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaHome className="text-lg" />
            <a href="#home">Home</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaUser className="text-lg" />
            <a href="#about">About</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaCode className="text-lg" />
            <a href="#skills">Skills</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaBriefcase className="text-lg" />
            <a href="#internship">Internship</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaProjectDiagram className="text-lg" />
            <a href="#projects">Projects</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaLaptopCode className="text-lg" />
            <a href="#training">Training</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaCertificate className="text-lg" />
            <a href="#certificates">Certificates</a>
          </li>

          {/* ✅ NEW EDUCATION */}
          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaGraduationCap className="text-lg" />
            <a href="#education">Education</a>
          </li>

          <li className="flex items-center gap-3 text-[#9fb3c8] hover:text-white transition">
            <FaEnvelope className="text-lg" />
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-4 mt-10">

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-[#9fb3c8] hover:text-white transition"
        >
          <FaGithub className="text-lg" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-[#9fb3c8] hover:text-white transition"
        >
          <FaLinkedin className="text-lg" />
        </a>

      </div>
    </div>
  );
}