import profileImg from "../assets/profile.jpeg";
const About = () => {
  return (
    <section className="py-20 px-10 bg-[#020c1b] text-white">
      
      <h2 className="text-4xl font-bold text-[#22d3ee] mb-10 text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-2xl shadow-lg w-72 h-80 object-cover border border-[#112240]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-[#64ffda]">
            Passionate about technology & innovation
          </h3>

          <p className="text-[#9fb3c8] leading-relaxed">
            I am a Computer Science Engineering student at Lovely Professional University 
            with strong interest in software development, full-stack web development and 
            problem solving using data structures and algorithms. I enjoy building scalable 
            web applications and solving challanging coding problems. Passionate about 
            creating impactfyl digital experiences. I constantly seek to learn and apply 
            cutting-edge technologies.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-6">
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