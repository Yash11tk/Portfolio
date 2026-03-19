import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiExpress, SiTailwindcss, SiGithub, SiMongodb, SiMysql, SiC } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#020c1b] text-white py-20 px-6">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Technical <span className="text-blue-400">Skills</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <Card title="Languages">
          <Skill icon={<SiCplusplus />} name="C++" />
          <Skill icon={<FaJava />} name="Java" />
          <Skill icon={<SiJavascript />} name="JavaScript" />
          <Skill icon={<SiC />} name="C" />
          <Skill icon={<FaHtml5 />} name="HTML5" />
          <Skill icon={<FaCss3Alt />} name="CSS3" />
        </Card>

        <Card title="Frameworks & Libraries">
          <Skill icon={<FaReact />} name="React.js" />
          <Skill icon={<FaNodeJs />} name="Node.js" />
          <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
          <Skill icon={<SiExpress />} name="Express.js" />
        </Card>

        <div className="space-y-6">
          <Card title="Tools & Platforms">
            <Skill icon={<SiGithub />} name="GitHub" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiMysql />} name="MySQL" />
          </Card>

          <Card title="Soft Skills">
            <Tag name="Problem Solving" />
            <Tag name="Team Player" />
            <Tag name="Adaptability" />
          </Card>
        </div>

      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-[#0a192f] p-6 rounded-2xl border border-blue-900">
      <h2 className="text-lg font-semibold mb-6 text-blue-400">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="bg-[#020c1b] p-4 rounded-xl flex flex-col items-center justify-center border border-blue-900 hover:border-blue-400 transition">
      <div className="text-3xl mb-2 text-blue-400">{icon}</div>
      <p className="text-sm text-gray-300">{name}</p>
    </div>
  );
}

function Tag({ name }) {
  return (
    <span className="bg-[#020c1b] border border-blue-900 px-4 py-2 rounded-full text-sm text-blue-300 hover:border-blue-400 transition">
      {name}
    </span>
  );
}