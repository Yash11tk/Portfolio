const Projects = () => {
  return (
    <section id="projects" className="px-10 py-20 bg-[#0a192f] text-white">
      
      <h2 className="text-3xl font-bold text-blue-400 mb-10">Projects</h2>

      <div className="space-y-10">

        {/* Project 1 */}
        <div className="bg-[#112240] p-8 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300">
          
          <h3 className="text-xl font-semibold mb-4">
            Exam Paper Generator | Full-Stack MERN Project |{" "}
            <a
              href="https://github.com/Yash11tk/Yash11tk-Exam_Paper_Generator"
              target="_blank"
              className="text-blue-400"
            >
              GitHub
            </a>
          </h3>

          <ul className="list-disc ml-5 space-y-3 text-gray-300">
            <li>
              Architected a secure full-stack web application that automates exam paper creation by randomly selecting questions, ensuring uniqueness and reducing manual effort in assessment preparation.
            </li>
            <li>
              Configured authentication and authorization mechanisms using JWT to enforce role-based access control for admins and users, protecting sensitive exam and question bank data.
            </li>
            <li>
              Organized a scalable question bank system with subject-wise and difficulty-level categorization, enabling efficient question management and fair exam paper generation.
            </li>
            <li>
              Generated downloadable and printable exam papers through optimized backend logic, ensuring fast performance and consistent output formatting.
            </li>
            <li>
              Tech: MongoDB, Express.js, React, Node.js, JWT, Tailwind CSS
            </li>
          </ul>

        </div>

        {/* Project 2 */}
        <div className="bg-[#112240] p-8 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300">
          
          <h3 className="text-xl font-semibold mb-4">
            Page Replacement Algorithm Simulator |{" "}
            <a
              href="https://github.com/Yash11tk/Page-Replacement-Algorithm-Simulator"
              target="_blank"
              className="text-blue-400"
            >
              GitHub
            </a>
          </h3>

          <ul className="list-disc ml-5 space-y-3 text-gray-300">
            <li>
              Designed and developed a GUI-based Page Replacement Algorithm Simulator (FIFO, LRU, Optimal) using Tkinter for interactive visualization of memory management operations.
            </li>
            <li>
              Implemented real-time page fault tracking, frame-by-frame simulation, and dynamic graph plotting using Matplotlib embedded within the Tkinter interface.
            </li>
            <li>
              Built robust algorithms for memory frame updates with detailed step explanations, enhancing understanding of OS paging concepts.
            </li>
            <li>
              Integrated user input handling, reset functionality, and state management to enable smooth navigation between simulation steps.
            </li>
            <li>
              Tech: Python, Tkinter, Matplotlib
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default Projects;