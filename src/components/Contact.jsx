import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#020c1b] text-white py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-blue-400">Me</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Let's <span className="text-blue-400">connect!</span>
          </h2>

          <p className="text-gray-400 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>

          <div className="space-y-4">
            <Info icon={<FaEnvelope />} title="Email" value="yourmail@gmail.com" />
            <Info icon={<FaPhoneAlt />} title="Phone" value="+91-XXXXXXXXXX" />
            <Info icon={<FaMapMarkerAlt />} title="Location" value="Punjab, India" />
          </div>

          <div className="flex gap-4 mt-6">
            <IconBtn icon={<FaGithub />} />
            <IconBtn icon={<FaLinkedin />} />
            <IconBtn icon={<FaEnvelope />} />
          </div>
        </div>

        <div className="bg-[#0a192f] p-6 rounded-2xl border border-blue-900">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="input" />
              <input type="email" placeholder="your@email.com" className="input" />
            </div>

            <input type="text" placeholder="What's this about?" className="input w-full" />

            <textarea rows="5" placeholder="Tell me about your project or idea..." className="input w-full"></textarea>

            <button className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="bg-[#0a192f] p-4 rounded-xl flex items-center gap-4 border border-blue-900">
      <div className="text-xl text-blue-400">{icon}</div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

function IconBtn({ icon }) {
  return (
    <button className="bg-[#0a192f] p-3 rounded-lg border border-blue-900 hover:border-blue-400 transition">
      {icon}
    </button>
  );
}