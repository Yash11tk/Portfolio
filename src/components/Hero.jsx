import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-10">

      {/* LEFT SIDE */}
      <div className="max-w-xl">

        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0f172a] border border-gray-700 text-sm text-gray-300 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Available for Work
        </div>

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
          <a href="https://www.linkedin.com/in/yash-thakurathi" target="_blank" rel="noopener noreferrer"
            className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
            LinkedIn
          </a>

          <a href="https://github.com/Yash11tk" target="_blank" rel="noopener noreferrer"
            className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
            GitHub
          </a>

          <a href="https://leetcode.com/u/8QUJcwnFTF/" target="_blank" rel="noopener noreferrer"
            className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
            LeetCode
          </a>

          <a href="mailto:thakurathiyash@gmail.com"
            className="bg-[#132a46] px-5 py-2 rounded-lg hover:bg-[#1d3b5c]">
            Email
          </a>
        </div>

        <a 
          href="https://drive.google.com/file/d/11B6oGNW8R08cLfnnIl8uDHPzhQu_022J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-[#22d3ee] text-black px-5 py-2 rounded-md font-medium inline-flex items-center w-fit hover:opacity-90 transition"
        >
          View Resume
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block">
        <img
          src={profile}
          alt="profile"
          className="w-80 rounded-2xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default Hero;