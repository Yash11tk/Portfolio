import { FaHome, FaUser, FaCode, FaProjectDiagram, FaCertificate, FaTrophy } from "react-icons/fa";
import { MdWork, MdSchool, MdContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-[#020c1b] text-white shadow-lg p-6">

      <h1 className="text-2xl font-bold mb-10 text-blue-400">Portfolio</h1>

      <ul className="space-y-6 text-sm">

        <li>
          <a href="#home" className="flex items-center gap-3 hover:text-blue-400">
            <FaHome /> Home
          </a>
        </li>

        <li>
          <a href="#about" className="flex items-center gap-3 hover:text-blue-400">
            <FaUser /> About
          </a>
        </li>

        <li>
          <a href="#skills" className="flex items-center gap-3 hover:text-blue-400">
            <GiSkills /> Skills
          </a>
        </li>

        <li>
          <a href="#internship" className="flex items-center gap-3 hover:text-blue-400">
            <MdWork /> Internship
          </a>
        </li>

        <li>
          <a href="#projects" className="flex items-center gap-3 hover:text-blue-400">
            <FaProjectDiagram /> Projects
          </a>
        </li>

        <li>
          <a href="#training" className="flex items-center gap-3 hover:text-blue-400">
            <FaCode /> Training
          </a>
        </li>

        <li>
          <a href="#certificates" className="flex items-center gap-3 hover:text-blue-400">
            <FaCertificate /> Certificates
          </a>
        </li>

        {/* ✅ Achievements added with icon */}
        <li>
          <a href="#achievements" className="flex items-center gap-3 hover:text-blue-400">
            <FaTrophy /> Achievements
          </a>
        </li>

        <li>
          <a href="#education" className="flex items-center gap-3 hover:text-blue-400">
            <MdSchool /> Education
          </a>
        </li>

        <li>
          <a href="#contact" className="flex items-center gap-3 hover:text-blue-400">
            <MdContactMail /> Contact
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;