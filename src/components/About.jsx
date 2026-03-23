const About = () => {
  return (
    <section className="py-24 px-10 bg-[#020c1b] text-white">
      
      <h2 className="text-4xl font-bold text-[#22d3ee] mb-6 text-center">
        About Me
      </h2>

      <div className="w-20 h-1 bg-[#22d3ee] mx-auto mb-12 rounded"></div>

      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6 text-[#64ffda]">
          Passionate about technology & innovation
        </h3>

        <p className="text-[#9fb3c8] leading-relaxed text-left">
          I am a Computer Science Engineering student at Lovely Professional University 
          with strong interest in software development, full-stack web development and 
          problem solving using data structures and algorithms. I enjoy building scalable 
          web applications and solving challenging coding problems while continuously 
          learning new technologies.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="mt-16 max-w-3xl mx-auto border-l border-[#112240] pl-6 space-y-10">

        <div>
          <h4 className="text-[#22d3ee] font-semibold">2023 - Present</h4>
          <p className="text-lg font-medium">B.Tech CSE - LPU</p>
          <p className="text-[#9fb3c8] text-sm">
            Learning core CS subjects, DSA and full stack development.
          </p>
        </div>

        <div>
          <h4 className="text-[#22d3ee] font-semibold">Projects</h4>
          <p className="text-lg font-medium">Full Stack Applications</p>
          <p className="text-[#9fb3c8] text-sm">
            Built multiple MERN stack projects and real-world applications.
          </p>
        </div>

        <div>
          <h4 className="text-[#22d3ee] font-semibold">Skills</h4>
          <p className="text-lg font-medium">Tech Stack</p>
          <p className="text-[#9fb3c8] text-sm">
            React, Node.js, Express, MongoDB, C++, JavaScript.
          </p>
        </div>

      </div>

      {/* TAGS */}
      <div className="flex justify-center flex-wrap gap-4 mt-12">
        <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">Full Stack Developer</span>
        <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">DSA Enthusiast</span>
        <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">MERN Stack</span>
        <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">Open Source Learner</span>
      </div>

    </section>
  );
};

export default About;