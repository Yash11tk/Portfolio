const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10">
      
      <h1 className="text-6xl font-bold text-white">
        Yash Thakurathi
      </h1>

      <h2 className="text-5xl font-bold text-[#22d3ee] mt-2">
        Full Stack Developer
      </h2>

      <p className="text-[#9fb3c8] mt-6 max-w-xl leading-relaxed">
        B.Tech Computer Science student at LPU with a focus on full-stack development.
        I enjoy solving coding challenges and building functional web applications 
        while constantly learning new technologies to improve my skills.
      </p>

      <p className="text-[#9fb3c8] mt-4">
        Punjab, India · B.Tech CSE @ LPU
      </p>

      <div className="flex gap-4 mt-6 flex-wrap">
        <a href="https://www.linkedin.com/in/yash-thakurathi" target="_blank"
          className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
          LinkedIn
        </a>

        <a href="https://github.com/Yash11tk" target="_blank"
          className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
          GitHub
        </a>

        <a href="https://leetcode.com/u/8QUJcwnFTF/" target="_blank"
          className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
          LeetCode
        </a>

        <a href="mailto:thakurathiyash@gmail.com"
          className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
          Email
        </a>
      </div>

      <a href="#"
        className="mt-8 bg-[#22d3ee] text-black px-5 py-2 rounded-md font-medium inline-flex items-center w-fit hover:opacity-90 transition">
        View Resume
      </a>

    </section>
  );
};

export default Hero;