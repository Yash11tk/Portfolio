const Internship = () => {
  return (
    <section className="py-20 px-10">
      
      <h2 className="text-4xl font-bold text-[#22d3ee] mb-8">
        Internship
      </h2>

      <div className="bg-[#132a46] p-8 rounded-xl hover:scale-[1.02] transition">

        <h3 className="text-2xl font-semibold text-white">
          Vaultofcodes – Web Developer |
          <a
            href="https://drive.google.com/file/d/1rAu4pNYvP3lbG3z7nuA_p_DNGax6EqQ7/view"
            target="_blank"
            className="text-[#22d3ee] ml-2"
          >
            Certificate
          </a>
        </h3>

        <ul className="text-[#9fb3c8] mt-4 space-y-2 list-disc pl-5 leading-relaxed">
          <li>
            Contributed as a Web Developer internship at VaultofCodes, working on responsive UI design and dynamic web features using modern front-end and back-end technologies.
          </li>
          <li>
            Gained hands-on experience in building user-centric components, integrating APIs, and following real-world web development workflows.
          </li>
          <li>
            <span className="text-white font-medium">Tech:</span> HTML, CSS, JavaScript, Node.js, React.js
          </li>
        </ul>

      </div>

    </section>
  );
};

export default Internship;