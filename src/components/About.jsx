const About = () => {
  return (
    <section className="py-20 px-10 bg-[#020c1b] text-white">
      
      <h2 className="text-4xl font-bold text-[#22d3ee] mb-10 text-center">
        About Me
      </h2>

      <div className="flex justify-center">
        
        {/* Text Section (Full Width Now) */}
        <div className="max-w-3xl text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#64ffda]">
            Passionate about technology & innovation
          </h3>

          <p className="text-[#9fb3c8] leading-relaxed">
            I am a Computer Science Engineering student at Lovely Professional University 
            with strong interest in software development, full-stack web development and 
            problem solving using data structures and algorithms. I enjoy building scalable 
            web applications and solving challenging coding problems. Passionate about 
            creating impactful digital experiences. I constantly seek to learn and apply 
            cutting-edge technologies.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">
              DSA Enthusiast
            </span>
            <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-[#112240] rounded-lg text-sm">
              Open Source Learner
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;