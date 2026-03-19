export default function Training() {
  return (
    <section id="training" className="px-10 py-20 bg-[#0a192f] text-white">

      <h2 className="text-3xl font-bold text-blue-400 mb-10">Training</h2>

      <div className="space-y-10">

        {/* Training Card */}
        <div className="bg-[#112240] p-8 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300">

          <h3 className="text-xl font-semibold mb-4">
            Master DSA with Java/C++ | W3grads |{" "}
            <a
              href="https://drive.google.com/file/d/1hwKYV3ZEMjwWkMEqz3F8PWgAnyiboKiO/view?usp=sharing"
              target="_blank"
              className="text-blue-400"
            >
              Certificate
            </a>
          </h3>

          <ul className="list-disc ml-5 space-y-3 text-gray-300">
            <li>
                Developed a Railway Waiting Queue Management System using Java to simulate passenger seat allocation.
            </li>
            <li>
                Implemented Queue (FIFO) data structure to efficiently manage and process waiting list operations.
            </li>
            <li>
                Integrated file handling to store and retrieve passenger data, ensuring data persistence.
            </li>
            <li>
                Tech: Java, Data Structures (Queue), File Handling
            </li>
          </ul>

        </div>

        {/* Project-based Training
        <div className="bg-[#112240] p-8 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300">

          <h3 className="text-xl font-semibold mb-4">
            Railway Waiting Queue Management System
          </h3>

          <ul className="list-disc ml-5 space-y-3 text-gray-300">
            
          </ul>

        </div> */}

      </div>

    </section>
  );
}