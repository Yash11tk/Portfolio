import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-20 px-10 bg-[#020c1b] text-white">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">
        My <span className="text-[#4f9cff]">Education</span>
      </h2>

      <p className="text-center text-[#9fb3c8] mb-12">
        Academic journey and qualifications
      </p>

      <div className="space-y-8">

        {/* Card 1 */}
        <div className="bg-[#0a192f] border border-[#112240] rounded-xl p-6 flex gap-6 items-start hover:shadow-lg transition">
          <div className="bg-[#112240] p-4 rounded-lg">
            <FaGraduationCap className="text-[#4f9cff] text-xl" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Bachelor of Technology – Computer Science & Engineering
            </h3>
            <p className="text-[#4f9cff]">
              Lovely Professional University
            </p>

            <div className="flex gap-4 mt-3">
              <span className="bg-[#112240] px-3 py-1 rounded-full text-sm">
                CGPA: 7.18
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0a192f] border border-[#112240] rounded-xl p-6 flex gap-6 items-start hover:shadow-lg transition">
          <div className="bg-[#112240] p-4 rounded-lg">
            <FaSchool className="text-[#4f9cff] text-xl" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Intermediate (12th Grade)
            </h3>
            <p className="text-[#4f9cff]">
              Army Public School Narangi
            </p>

            <div className="flex gap-4 mt-3">
              <span className="bg-[#112240] px-3 py-1 rounded-full text-sm">
                Percentage: 81%
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0a192f] border border-[#112240] rounded-xl p-6 flex gap-6 items-start hover:shadow-lg transition">
          <div className="bg-[#112240] p-4 rounded-lg">
            <FaBook className="text-[#4f9cff] text-xl" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Matriculation (10th Grade)
            </h3>
            <p className="text-[#4f9cff]">
              Army Public School Jabalpur
            </p>

            <div className="flex gap-4 mt-3">
              <span className="bg-[#112240] px-3 py-1 rounded-full text-sm">
                Percentage: 67%
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;